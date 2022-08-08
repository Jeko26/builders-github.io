let burger = document.querySelector('.burger');
let links = document.querySelector('.header__group--burger');
burger.addEventListener('click', function () {
	links.classList.toggle('burger--open');
	burger.classList.toggle('burger--cross');
});