const burgerButton = document.querySelector('.hamburger-button');
const navbarMenu = document.querySelector('.nav__item-container');

const handleNavMenu = () => {
	navbarMenu.classList.toggle('nav--active');
};

burgerButton.addEventListener('click', handleNavMenu);
//

const slider = document.querySelector('.slider');
const sliderBox = document.querySelector('.slider-box');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const carouselImages = document.querySelectorAll('.slider-img');
const carouselWidth = slider.clientWidth;
let index = 0;

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};

const handleRightArrow = () => {
	index++;
	changeImage();
};

const handleLeftArrow = () => {
	index--;
	changeImage();
};

rightBtn.addEventListener('click', handleRightArrow);
leftBtn.addEventListener('click', handleLeftArrow);
