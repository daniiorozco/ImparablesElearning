const navMenu=document.querySelector("#navMenu");
const menuLista= document.querySelector(".menuLista");
navMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
    menuLista.classList.toggle("active")
})

// INPUT SEARCH
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $(".buscador");
    x.hover(entraMouse, saleMouse);
}

  function entraMouse() {
    $('.contenedor-search').show(500);
    $('.menuLista').hide(100);
    $('.logo').hide(100);
    $('.ingreso').hide(100);
    $('.contenedor-search').css('display', 'flex');
    $('.contenedor-search').css('justify-content', 'space-between');
    $('.buscador').css('margin', '50px');
  }

  function saleMouse() {
    $('.contenedor-search').hide(500);    
    $('.menuLista').show(100);
    $('.logo').show(100);
    $('.ingreso').show(100);         
} 


$(() => {
    $("h1").slideUp("slow", function () {
    $("h2").fadeIn(3000);
    }).slideDown(1000);
});