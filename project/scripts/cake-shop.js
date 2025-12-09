const menuButton = document.getElementById("menu");
const nav = document.getElementById("mobile-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});



const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
    testimonials[index].classList.remove('active');
    index = (index - 1 + testimonials.length) % testimonials.length;
    testimonials[index].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
});





