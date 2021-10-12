'use strict';
let ham = document.getElementsByClassName("hamburger");
let hammenu = document.getElementsByClassName("hamb-menu");
let hamclose = document.getElementsByClassName("hamb-close");
let overlay = document.getElementsByClassName("overlay");
let portfolioHover = document.getElementsByClassName("portfolio-hover");
let portfolioModal = document.getElementsByClassName("portfolio-modal");
let closeModal = document.getElementsByClassName("close-modal")

ham[0].addEventListener("click", () => {
    hammenu[0].classList.add('change');
    overlay[0].classList.add('change');
    hammenu[0].classList.remove('hidden');
    overlay[0].classList.remove('hidden');
});
hamclose[0].addEventListener('click', () => {
    hammenu[0].classList.add('hidden');
    overlay[0].classList.add('hidden');
    hammenu[0].classList.remove('change');
    overlay[0].classList.remove('change');
})
overlay[0].addEventListener('click', () => {
    hammenu[0].classList.add('hidden');
    overlay[0].classList.add('hidden');
    hammenu[0].classList.remove('change');
    overlay[0].classList.remove('change');
})
portfolioHover[0].addEventListener('click', () => {
    portfolioModal[0].classList.remove('hide');
})
closeModal[0].addEventListener('click', () => {
    portfolioModal[0].classList.add('hide');
})
