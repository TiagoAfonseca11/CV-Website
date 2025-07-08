// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.getElementById('current-year');

// Set current year in footer
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Intersection Observer for scroll animations (global para ser acessível)
window.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Não remover o observer para permitir re-animações se necessário
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Função para inicializar animações
function initializeAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    console.log('Inicializando animações para', animateElements.length, 'elementos');
    
    animateElements.forEach(element => {
        window.observer.observe(element);
    });
}

// Inicializar animações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado - inicializando animações');
    initializeAnimations();
    
    // Re-inicializar após um delay para capturar elementos carregados dinamicamente
    setTimeout(initializeAnimations, 100);
    setTimeout(initializeAnimations, 500);
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    // Verificar se o elemento clicado é um link anchor
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
            
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Debug: Verificar se os elementos existem
window.addEventListener('load', () => {
    console.log('=== DEBUG INFO ===');
    console.log('Projects container:', document.getElementById('projects-container'));
    console.log('Animate elements:', document.querySelectorAll('.animate-on-scroll').length);
    console.log('Navbar:', document.querySelector('.navbar'));
    console.log('==================');
});