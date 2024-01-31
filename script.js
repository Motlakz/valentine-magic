document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav a');
    const agreeBtn = document.querySelector('.affirm');
    const disagreeBtn = document.querySelector('.deny');
    const cookiesContainer = document.querySelector('.cookies');

    function hideCookiesContainer() {
        cookiesContainer.classList.add('animate__animated', 'animate__zoomOut');
        setTimeout(() => {
            cookiesContainer.style.display = 'none';
        }, 500);
    }
    
    agreeBtn.addEventListener('click', hideCookiesContainer);
    disagreeBtn.addEventListener('click', hideCookiesContainer);    

    // Intersection Observer for elements with the "slit-in-vertical" class
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    });

    // Observe elements with the "slit-in-vertical" class and "animate__animated" class
    document.querySelectorAll(".slit-in-vertical, .animate__animated").forEach(element => {
        observer.observe(element);
    });

    // Observe dropdowns
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const toggleBtn = dropdown.querySelector(".toggle-btn");
        const content = dropdown.querySelector(".content");

        toggleBtn.addEventListener("click", () => {
            content.classList.toggle("open");
            toggleBtn.classList.toggle("open");
        });
    });
    
    navToggler.addEventListener('click', () => {
        navToggler.classList.toggle('toggler-open');
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(elem => elem.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            navToggler.click();
        }
    }));

    // Smooth scroll for links with hash (#) in the href attribute
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
