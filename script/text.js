/* NAV RESPONSIVE */
iconobarras = document.querySelector('.icono-barras');
nav = document.querySelector('nav');
iconobarras.onclick = function () {
	nav.classList.toggle('active');
};

/* WHATSAP BOTON */

window.addEventListener('scroll', function () {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 400) {
		document.querySelector('.btn-wsp').classList.add('show-btn');
		document.querySelector('.btn-wsp').classList.remove('hide-btn');
	} else {
		document.querySelector('.btn-wsp').classList.add('hide-btn');
		document.querySelector('.btn-wsp').classList.remove('show-btn');
	}
});

/* PORTADA INDEX */
let bg = document.getElementById('bg');
let text = document.getElementById('text');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let ush = document.getElementById('ush');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	bg.style.width = 100 + value / 30 + '%';
	text.style.marginTop = value * -0.7 + 'px';
	mountain1.style.left = value * -2.5 + 'px';
	mountain1.style.bottom = value * -1.5 + 'px';
	mountain2.style.left = value * 2.5 + 'px';
	mountain2.style.bottom = value * -1.5 + 'px';
});

/* SLIDER EXCURSIONES */
const sliderImages = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentImage = 0;
// Función para mostrar la imagen
function showImage(n) {
	// Oculta todas las imágenes
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
	// Muestra la imagen actual
	sliderImages[n].style.display = 'block';
}

// Función para mover a la imagen anterior
function prevImage() {
	currentImage--;
	if (currentImage < 0) {
		currentImage = sliderImages.length - 1;
	}
	showImage(currentImage);
}

// Función para mover a la siguiente imagen
function nextImage() {
	currentImage++;
	if (currentImage >= sliderImages.length) {
		currentImage = 0;
	}
	showImage(currentImage);
}

// Agrega event listeners a los botones de anterior y siguiente
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Muestra la primera imagen al cargar la página
showImage(currentImage);

console.log('SCRIPT EJECUTADO');
