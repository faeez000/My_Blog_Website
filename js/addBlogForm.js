let blogTitile = document.getElementById("blog_title")
let blogDescription = document.getElementById("blog_info")

let blogImage = document.getElementById("blog_pic")
let imageInput = document.getElementById("blog_image_upload")
let submitButton = document.getElementById("add_blog_btn")

let imageUrl

// localStorage.setItem("blogData","[]")
let blogs = JSON.parse(localStorage.getItem("blogdata")) || []

function updateLocalStorageArray() {
    localStorage.setItem('blogdata', JSON.stringify(blogs));
}

imageInput.onchange = function(){

    const fr = new FileReader()

    fr.readAsDataURL(imageInput.files[0])

    fr.addEventListener('load',()=>{
        imageUrl = fr.result
    })
    const previewImageUrl = URL.createObjectURL(imageInput.files[0])
    blogImage.src = previewImageUrl
}



submitButton.onclick = function(){
    const data = {
        id:Math.random().toString(),
        title:blogTitile.value,
        info:blogDescription.value,
        image:imageUrl
    }

    
        // Push the new data into the array
        blogs.push(data);

        // Update local storage
        updateLocalStorageArray();

    localStorage.setItem("blogdata",JSON.stringify(blogs))
   
    blogTitile.value = ""
    blogDescription.value=""
    blogImage.src = ""
    imageUrl = ""

    alert("New Blog Has Been Added Successfully...")
}

 

