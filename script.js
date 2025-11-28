const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    elements.forEach(el => {
        if (!el.classList.contains('show')) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('show');
            }
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
