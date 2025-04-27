document.addEventListener('DOMContentLoaded', function() {
    // Анимации при прокрутке
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

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Активное состояние меню
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Инициализация
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});