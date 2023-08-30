blogList = JSON.parse(localStorage.getItem("blogdata"))

var currentUrl = window.location.href;

let url = new URL(currentUrl);
let search_params = url.searchParams;

let blogId =search_params.get('id')

var blogPost = blogList.find(function(blog) {
    return blog.id === blogId;
  });

var blogPostHeading = document.getElementById("blog-post-heading")

var blogHeading = document.createTextNode(blogPost.title);

blogPostHeading.appendChild(blogHeading);

var blogPostInfo = document.getElementById("blog-post-information")

var blogInfo = document.createTextNode(blogPost.info);

blogPostInfo.appendChild(blogInfo);

console.log('blogPost',blogPost)

