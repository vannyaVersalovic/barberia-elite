// Cambiar el fondo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(0,0,0,0.9)';
        header.style.boxShadow = 'none';
    }
});

// Suavizar el scroll para los links del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Crear el botón dinámicamente o manejar su visibilidad
const createWhatsAppBtn = () => {
    const btn = document.createElement('a');
    btn.href = "https://wa.me/56926073767?text=Hola!%20Me%20gustaría%20agendar%20una%20cita";
    btn.className = "whatsapp-float";
    btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    btn.target = "_blank";
    document.body.appendChild(btn);

    // Aparecer al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
};
createWhatsAppBtn();

const revealOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .feature-item, .img-box');
    
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

// Configuración inicial para las animaciones
document.querySelectorAll('.service-card, .feature-item, .img-box').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease-out";
});

window.addEventListener('scroll', revealOnScroll);

// Menú Hamburguesa
const mobileMenu = document.querySelector('#mobile-menu');
const navContainer = document.querySelector('.nav-container');

mobileMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    // Cambia el icono de barras a una "X" al abrir
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar el menú si hacen clic en un link (opcional pero recomendado)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
    });
});