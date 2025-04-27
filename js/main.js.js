document.addEventListener('DOMContentLoaded', function() {
    // Анимация при прокрутке
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.recipe-card, .section-title');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const scrollPosition = windowHeight / 1.2;
            
            if (elementPosition < scrollPosition) {
                element.classList.add('slide-up');
            }
        });
    };
    
    // Инициализация
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запустить сразу для видимых элементов
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});