window.addEventListener("DOMContentLoaded", initFunctions);
function initFunctions(){
    const counter = document.querySelector("#counter");
    const button = document.querySelectorAll(".btn");
    let c = 0;
    button.forEach((opr) => {
        opr.addEventListener("click",()=>{
            const oprchoice = opr.classList;
            if(oprchoice.contains("decrease")){
                c--;
                counter.innerText = c;
            } else if(oprchoice.contains("reset")){
                c=0;
                counter.innerText = c;
            } else{
                c++;
                counter.innerText = c;
            }
            if(c<0){
                counter.style.color = 'red';
            } else if(c>0){
                counter.style.color = 'green';
            }
            else{
                counter.style.color = 'black';
            }
        });
    });
}