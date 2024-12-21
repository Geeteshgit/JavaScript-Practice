const openModal = document.querySelector("#open");
const modalOverlay = document.querySelector(".modal-overlay");
const close = document.querySelector(".close");

openModal.addEventListener("click",()=>{
    modalOverlay.classList.toggle("show");
});

close.addEventListener("click",()=>{
    modalOverlay.classList.toggle("show");
});