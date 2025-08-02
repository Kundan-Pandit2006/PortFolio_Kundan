// Toggle navbar for mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`header nav a[href*="${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky header toggle
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .coding-platform, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });

// Typed.js text effect
const typed = new Typed('.multiple-text', {
    strings: ['Computer Science Student', 'Full Stack Developer', 'Coder'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Handle form submission to show thank-you message
const form = document.querySelector('form');
const thankYouMessage = document.querySelector('#thank-you-message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submit

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset(); // Clear the form
            form.style.display = 'none'; // Hide form
            thankYouMessage.style.display = 'block'; // Show thank-you section
        } else {
            alert('Something went wrong. Please try again!');
        }
    }).catch(error => {
        alert('There was an error submitting the form.');
        console.error(error);
    });
});


