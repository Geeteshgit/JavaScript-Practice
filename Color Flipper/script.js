window.addEventListener("DOMContentLoaded",()=>{
    const button = document.querySelector("#btn");
    const main = document.querySelector("main");
    const colors = ["green","blue","yellow","purple","white","grey","aqua"];
    const span = document.querySelector("span");
    // let c = 0;
    button.addEventListener("click",()=>{
        // main.style.backgroundColor = colors[c];
        // span.innerText = colors[c];
        // c++;
        // if(c==colors.length-1){
        //     c=0;
        // }
        const random = randomnum();
        main.style.backgroundColor = colors[random];
        span.innerText = colors[random];

    function randomnum(){
         return Math.floor(Math.random()*colors.length);
    }

    });
});