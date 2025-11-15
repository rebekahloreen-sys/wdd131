

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = new Date(document.lastModified);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString(undefined, options);

document.getElementById("lastModified").textContent = `Last modified: ${formattedDate}`;


const menuButton = document.getElementById("menu");
const nav = document.getElementById("mobile-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
