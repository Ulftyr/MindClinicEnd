//menu hamburger
const menuMobile = document.querySelector('.nav__menu-list')
const burgerBtn = document.querySelector('.nav__burger')
const menuItemArr = document.querySelectorAll('.nav__menu-item')

// slider
const slider = document.querySelector('.header__slider-box')
const carouselSliders = document.querySelectorAll('.header__slider-img')
const carouselWidth = slider.offsetWidth + slider.offsetWidth / 2
const carouselSpeed = 3500
let indexCarousel = 0

//arrow descriptions
const arrowAll = document.querySelectorAll('.arrow-card')
const descriptionsOne = document.querySelectorAll('.our-team-box__card-text__description')
const descriptionsTwo = document.querySelectorAll('.our-team-box__card-text__description--two')

//scroll animation
const offerBoxOne = document.querySelector('.offer__box-one')
const offerBoxTwo = document.querySelector('.offer__box-two')
const offerBoxThree = document.querySelector('.offer__box-three')

console.log(offerBoxOne.top)
//open and close menu
const openMenu = () => {
	burgerBtn.classList.toggle('active-menu')

	if (burgerBtn.classList.contains('active-menu')) {
		menuMobile.style.transform = 'translateX(0)'
	} else {
		menuMobile.style.transform = 'translateX(100%)'
	}
}

const closingMenu = () => {
	burgerBtn.classList.remove('active-menu')
	menuMobile.style.transform = 'translateX(100%)'
}

//carousel slider
const handleCarousel = () => {
	indexCarousel++
	changeImg()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImg = () => {
	if (indexCarousel > carouselSliders.length - 1) {
		indexCarousel = 0
	} else if (indexCarousel < 0) {
		indexCarousel = carouselSliders.length - 1
	}

	slider.style.transform = `translateX(${-indexCarousel * carouselWidth}px)`
}

//arrow description
function nextText() {
	if (this.previousElementSibling.previousElementSibling.style.display !== 'none') {
		this.previousElementSibling.previousElementSibling.style.display = 'none'
		this.previousElementSibling.style.display = 'block'
	} else {
		this.previousElementSibling.previousElementSibling.style.display = 'block'
		this.previousElementSibling.style.display = 'none'
	}

	if (this.previousElementSibling.style.display === 'block') {
		this.style.transform = 'rotate(180deg)'
	} else {
		this.style.transform = 'rotate(0)'
	}
}

//addEventListener
arrowAll.forEach(arrow => {
	arrow.addEventListener('click', nextText)
})

menuItemArr.forEach(item => {
	item.addEventListener('click', closingMenu)
})

burgerBtn.addEventListener('click', openMenu)
