var blogList
const fetchData = ()=>{

     blogList = JSON.parse(localStorage.getItem("blogdata"))
}

fetchData()

console.log('blog data from local storage', blogList)

const blogListSection = document.getElementById('blog-List-Section')

const blogCardList = blogList.map((data)=>
`
<div class="blog-article" style="margin-bottom: 3%; margin-top: 3%;">
        <div class="blog-article-img" id="${data.id}">
            <img src="${data.image}" alt="article">
        </div>
        <div class="blog-article-content font1">
            <a href="/blogpost.html?id=${data.id}" class="blog-heading-link" data-id=${data.id}>
                <h3>${data.title}.</h3>
            </a> 
            <span style="text-overflow: ellipsis !important;" >${data.info}</span>
        </div>
        <div style="gap: 2%; display:flex">
            <a href="/editBlog.html?id=${data.id}" class="editButton" data-id=${data.id}>Edit Blog </a>
            <button class="deleteButton" data-id=${data.id}>Delete Blog </button>
        </div>
        
    <div>
</div>
`

).join('')

blogListSection.innerHTML = blogCardList

// Adding event listeners to the buttons
const editButtons = document.querySelectorAll('.editButton');
const deleteButtons = document.querySelectorAll('.deleteButton');


editButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        console.log(`Edit button clicked for ID: ${id}`);
        
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        console.log(`Delete button clicked for ID: ${id}`);

        var result = confirm("Want to delete?");
        if (result) {
            temp = blogList.filter(blog => blog.id != id)
            localStorage.setItem("blogdata",JSON.stringify(temp))
            location.reload()
        }
        else{
            return
        }
        
    });
});






    

    

// createBlog(blogList)