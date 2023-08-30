blogList = JSON.parse(localStorage.getItem("blogdata")) || []

var currentUrl = window.location.href;

let url = new URL(currentUrl);
let search_params = url.searchParams;

let blogId =search_params.get('id')

var blogPost = blogList.find(function(blog) {
    return blog.id === blogId;
  });


let blogTitile = document.getElementById("edit_blog_title")
blogTitile.value = blogPost.title
let blogDescription = document.getElementById("edit_blog_info")
blogDescription.value = blogPost.info

let blogImage = document.getElementById("blog_pic")
blogImage.src = blogPost.image
let imageInput = document.getElementById("blog_image_upload")
let submitButton = document.getElementById("edit_blog_btn")

let imageUrl



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

    var targetIndex = blogList.findIndex(function(blog) {
        return blog.id === blogId;
      });


      if (targetIndex !== -1) {
        // Update the properties of the object
        blogList[targetIndex].title = blogTitile.value;
        blogList[targetIndex].info = blogDescription.value;
        blogList[targetIndex].image = imageUrl
        // Update the local storage with the modified JSON array
        localStorage.setItem("blogdata", JSON.stringify(blogList));
  
        alert("Blog Info Updated Successfully")
      } else {
        console.log("Object not found for the given id.");
      }

}

 

