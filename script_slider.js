const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.querySelector('.dots');

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides; // Mantiene el index entre 0 y totalSlides-1
    const offset = -currentSlide * 100; // Calcula el desplazamiento en %
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dotsContainer.innerHTML = ''; // Limpia los puntos existentes
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Inicializa el slider
showSlide(currentSlide);
