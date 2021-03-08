
let cartButton = document.querySelector('#cart-button');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

cartButton.addEventListener('click', function(event){
  modal.classList.add('is-open');
});

close.addEventListener('click', function(event){
  modal.classList.remove('is-open');
});

new WOW().init();