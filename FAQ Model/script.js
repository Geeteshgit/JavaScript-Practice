const questions = document.querySelectorAll(".ques");
const content = document.querySelectorAll(".content");
const icon = document.querySelectorAll(".icon");
const opr = document.querySelectorAll(".icon span");

icon.forEach((btn,btnid) => {
    btn.addEventListener("click",()=>{
        content.forEach((content,contentid)=>{
            if(btnid === contentid){
                content.classList.toggle("show");
            }
            else{
                content.classList.remove("show");
            }
        });
        
    });
});


