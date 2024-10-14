// Highlight the active section in the navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// const text = "Hello, I am learning to create a typing animation with JavaScript by using ChatGPT!";
const text = "CPE 38 KMUTT";
const textElement = document.getElementById('typing-text');

let index = 0;
let isDeleting = false;

const typingSpeed = 50;
const resetDelay = 2000;
const deleteSpeed = 100;

function typeText() {
    if (!isDeleting) {
        textElement.innerHTML = text.slice(0, index);
        index++;

        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeText, resetDelay);
            return;
        }
    } else {
        index--;
        textElement.innerHTML = text.slice(0, index);

        if (index === 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeText, isDeleting ? deleteSpeed : typingSpeed);
}

typeText();
