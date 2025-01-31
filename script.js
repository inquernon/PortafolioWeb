// Cambiar entre idiomas
const translations = {
    es: {
        aboutTitle: 'Sobre mí',
        aboutText: 'Soy Ingeniero Informático con experiencia en desarrollo de software, videojuegos y pruebas de calidad. Con habilidades avanzadas en tecnologías como Unity, Node.js, PHP, Spring Boot y metodologías ágiles. Apasionado por la innovación tecnológica y la creación de experiencias interactivas para el usuario.',
        projectsTitle: 'Mis Proyectos',
        skillsTitle: 'Mis Habilidades',
        contactTitle:'Contacto',
        contactText: '¿Tienes un proyecto en mente o alguna consulta? ¡Contáctame!'
    },
    en: {
        aboutTitle: "About Me",
        aboutText: "I am a Computer Engineer with experience in software development, video games, and quality testing",
        projectsTitle: "My Projects",
        skillsTitle: "My Skills",
        contactTitle: "Contact",
        contactText: "Got a project in mind or a query? Get in touch!"
        
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.dataset.translate;
        element.textContent = translations[lang][key];
    });
}

// Descargar CV
function downloadCV() {
    const cvUrl = 'path_to_your_cv.pdf';  // Cambia esta URL al enlace de tu CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Jaime_Ortiz_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Modo oscuro a modo claro
function toggleDarkMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
    if (currentMode === 'dark') {
        body.classList.remove('dark');
        body.classList.add('light');
        document.getElementById('darkModeBtn').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        document.getElementById('darkModeBtn').innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Inicializar el modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme);
    document.getElementById('darkModeBtn').innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Guardar el tema seleccionado
function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.contains('dark');
    
    body.classList.toggle('dark', !isDark);
    body.classList.toggle('light', isDark);
    
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    
    document.getElementById('darkModeBtn').innerHTML = isDark ? 
        '<i class="fas fa-moon"></i>' : 
        '<i class="fas fa-sun"></i>';
}

// Inicialización mejorada
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme);
    document.getElementById('darkModeBtn').innerHTML = 
        savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});