
var btnMenu = document.querySelector('#btn-menu'),
	headerPag =  document.querySelector('.header-pag');
	


function ShowMenu(argument) {
	headerPag.classList.toggle('show')
}




btnMenu.addEventListener('click', ShowMenu)
