const navbar = document.querySelector(".links");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
menu.addEventListener("click",()=>{
    navbar.classList.toggle("active");
});

close.addEventListener("click",()=>{
    navbar.classList.toggle("active");
});
