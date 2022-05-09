//Menú desplegable
const navMenu=document.querySelector("#navMenu");
const menuLista= document.querySelector(".menuLista");
navMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
    menuLista.classList.toggle("active")
})

// Efecto de buscador desplegable 
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
    $('svg').css('margin-left', '-30%');
  }

  function saleMouse() {
    $('.contenedor-search').hide(500);    
    $('.menuLista').show(100);
    $('.logo').show(100);
    $('.ingreso').show(100);         
    $('svg').css('margin-left', '70%');
} 