const menu = document.getElementById('fondo');
const items = document.getElementById('item');

document.getElementById("btn-menu").addEventListener('click', function(){
  menu.classList.add('mostrar');
  items.classList.add('mostrarI');
  menu.classList.remove('quitar');
  items.classList.remove('quitarI');
});

document.getElementById("close-menu").addEventListener('click', function() {
  menu.classList.add('quitar');
  items.classList.add('quitarI');
  menu.classList.remove('mostrar');
  items.classList.remove('mostrarI');
});

const servicios = document.getElementById('menu-1');
const menu2 = document.getElementById('menu-2');
const menu3 = document.getElementById('menu-3');
const serviciositems = document.getElementById('servicios-items');
const back = document.getElementById('back');

document.getElementById("servicios").addEventListener('click', function (){
  servicios.classList.add('quitarItems');
  menu2.classList.add('quitarItems');
  menu3.classList.add('quitarItems');
  serviciositems.classList.add('mostrar-servicios-menu');
  back.style.opacity = "1";
});

document.getElementById("back").addEventListener('click', function () {
  servicios.classList.remove('quitarItems');
  menu2.classList.remove('quitarItems');
  menu3.classList.remove('quitarItems');
  serviciositems.classList.remove('mostrar-servicios-menu');
  back.style.opacity = "0";
});