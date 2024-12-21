const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let current = 0;

slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
});


next.addEventListener("click",()=>{
    current++;
    if(current===slides.length){
        current=0;
    }
    slideimg();
});
prev.addEventListener("click",()=>{
    current--;
    if(current<0){
        current=slides.length-1;
    }
    slideimg();
});

function slideimg() {
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${current*100}%)`;
    });
}


