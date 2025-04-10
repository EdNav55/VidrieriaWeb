const navs = document.querySelectorAll('.navegacion a[href^="#"]');
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    const bottomHeader = document.querySelector(".bottom-header");
    if (bottomHeader) {
        if (scrollPosition > 100) {
            bottomHeader.classList.add("bottom-header-scroll");
        } else {
            bottomHeader.classList.remove("bottom-header-scroll");
        }
    }

    navs.forEach(nav => {
        const area = document.querySelector(nav.getAttribute('href'));
        if (area) {
            const rect = area.getBoundingClientRect();
            if (rect.top >= -50 && rect.top < window.innerHeight / 2) {
                nav.classList.add("selected-a");
            } else {
                nav.classList.remove("selected-a");
            }
        }
    });
});