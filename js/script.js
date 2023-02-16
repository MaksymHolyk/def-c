//Burger
const iconMenu = document.querySelector('.nav-burger');
if (iconMenu) {
	const menuList = document.querySelector('.nav-list');
	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle('_active-burger');
		menuList.classList.toggle('_active');
	});
}




//Slider
new Swiper('.image-slider',{
	//Arrow
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
	//Navigation
	pagination: {
		el: '.swiper-pagination',
		//Булеты управления 
		clickable: true,
	},
	// autoHeight - авто-высота
	// autoHeight: true,

	//space-between (отступ между слайдами)
	// spaceBetween: нужное значение цифрой,

	//loop - бесконечная прокрутка
	loop: true,

	

});
