/**
 * Основные скрипты для сайта веганских рецептов
 * Гарантированно работают с предоставленным HTML/CSS
 */

document.addEventListener('DOMContentLoaded', function() {
    try {
        // 1. Анимации при прокрутке
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.recipe-card, .section-title, .hero-content');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const scrollPosition = windowHeight * 0.75;
                
                if (elementPosition < scrollPosition) {
                    element.classList.add('slide-up');
                }
            });
        };

        // 2. Плавная прокрутка
        const smoothScroll = function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        };

        // 3. Активное состояние навигации
        const setActiveNav = function() {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-list a');
            
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        };

        // Инициализация
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Для элементов уже в viewport
        smoothScroll();
        setActiveNav();

        console.log('Скрипты успешно загружены!');

    } catch (error) {
        console.error('Ошибка в скриптах:', error);
    }
});