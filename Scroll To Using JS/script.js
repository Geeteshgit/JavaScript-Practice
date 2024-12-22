window.addEventListener("DOMContentLoaded",initEvents);
function initEvents(){
    const button = document.querySelectorAll(".btn");
    const homepage = document.querySelector("#home");
    const aboutpage = document.querySelector("#about");
    const contactpage = document.querySelector("#contact");    

    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            if(btn.classList.contains("home")){
                homepage.scrollIntoView({
                    behavior : "smooth"
                })
            } else if(btn.classList.contains("about")){
                aboutpage.scrollIntoView({
                    behavior : "smooth"
                })
            } else if(btn.classList.contains("contact")){
                contactpage.scrollIntoView({
                    behavior: "smooth"
                })
            }
        });
    });

    

}