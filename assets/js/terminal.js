// terminal.js
document.addEventListener("DOMContentLoaded", () => {
    // Seamless marquee for skills
    const skillsContainer = document.querySelector('.skills');
    if (skillsContainer) {
        const iconsList = skillsContainer.querySelector('ul.icons');
        if (iconsList) {
            // Clone the list multiple times for a seamless slider
            const clone1 = iconsList.cloneNode(true);
            const clone2 = iconsList.cloneNode(true);
            skillsContainer.appendChild(clone1);
            skillsContainer.appendChild(clone2);
        }
    }

    // Select elements to reveal upon scrolling
    const revealElements = document.querySelectorAll('.work-experience, .item, section header, .skills, #logo p, #logo h1');
    
    // initially hide them
    revealElements.forEach(el => {
        el.classList.add('terminal-hidden');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the reveal animation class
                entry.target.classList.add('terminal-reveal');
                entry.target.classList.remove('terminal-hidden');
                
                // Stop observing once revealed to keep the terminal look static after load
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% visible
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Add a blinking cursor to the main title
    const title = document.querySelector('h2.alt .title .name strong');
    if (title) {
        title.innerHTML = title.innerHTML + '<span class="cursor">&nbsp;</span>';
    }
});
