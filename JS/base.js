document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    if (!links.length) return;

    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');

    links.forEach(link => {
        try {
            const url = new URL(link.getAttribute('href') ?? '', window.location.href);
            const linkPath = url.pathname.replace(/\/index\.html$/, '/');
            const samePage = linkPath === currentPath;

            if (samePage && (!url.hash || url.hash === window.location.hash)) {
                link.classList.add('active');
            }
        } catch {
            // ignore invalid URLs
        }
    });
});
