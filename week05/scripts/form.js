const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = new Date(document.lastModified);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString(undefined, options);

document.getElementById("lastModified").textContent = `Last modified: ${formattedDate}`;



const products = ["Option one", "Option two", "Option three", "Option four", "Option five"];

const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    select.appendChild(option);
});