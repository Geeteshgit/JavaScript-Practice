window.addEventListener("DOMContentLoaded",initEvents);
function initEvents(){
    const button = document.querySelectorAll(".btn");
    const content = document.querySelectorAll(".content");

    button.forEach((btn,btnid)=>{
    btn.addEventListener("click",()=>{
        button.forEach((buttn)=>{
            buttn.classList.remove("show");
            btn.classList.add("show")
        });
        content.forEach((con,conid)=>{
            if(btnid === conid){
                con.classList.add("show");
            }
            else{
                con.classList.remove("show");
            }
        });
        });
    });
}