const navMenu=document.querySelector("#navMenu");
const menuLista= document.querySelector(".menuLista");
navMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
    menuLista.classList.toggle("active")
})
