let category_title = document.getElementsByClassName("category-brief-title")[0];
let signin= document.getElementsByClassName("signin-nav")[0];

category_title.addEventListener('click', function(){
    window.location.href = "./assets/pages/category/category.html";
});

signin.addEventListener('click', function(){
    window.location.href = "./assets/pages/login/login.html";
});