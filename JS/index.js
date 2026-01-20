document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .timeline-card, .highlight-card, .ambition-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            card.style.setProperty('--mx', `${(x / width) * 100}%`);
            card.style.setProperty('--my', `${(y / height) * 100}%`);
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.35)';
            card.style.background = 'radial-gradient(circle at var(--mx) var(--my), rgba(143,214,255,0.12), rgba(255,255,255,0.02))';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.background = '';
        });
    });
});


