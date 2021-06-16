let logo = document.querySelector('.logo');
let sub = document.querySelector('#sub');
let dec = document.querySelector('#dec');
let actu = document.querySelector('#actu');
let activ = document.querySelector('#activ');
let shop = document.querySelector('#shop');
let forum = document.querySelector('#forum');``


dec.addEventListener('click', function (){
    sub.textContent = 'Découverte';
});
actu.addEventListener('click', function (){
    sub.textContent = 'Actualités';
});
activ.addEventListener('click', function (){
    sub.textContent = 'Activités';
});
shop.addEventListener('click', function (){
    sub.textContent = 'Boutique';
});
forum.addEventListener('click', function (){
    sub.textContent = 'Forum';
});
logo.addEventListener('click', function (){
    sub.textContent = '';
});



