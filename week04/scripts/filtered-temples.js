

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



const templesElement = document.querySelector("#temples")
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      year: 2005,
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      year: 1888,
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      year: 2015,
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      year: 2020,
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      year: 1974,
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      year: 1986,
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      year: 1983,
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Smithfield Utah",
      location: "Smithfield, Utah",
      dedicated: "2022, June, 18",
      year: 2022,
      area: 81000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/smithfield-utah-temple/smithfield-utah-temple-23671-main.jpg"
    },
    {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois",
      dedicated: "1999, October, 24",
      year: 1999,
      area: 54000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      year: 1980,
      area: 53997,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      year: 2019,
      area: 41010,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    }
];

function displayTemples(array) {
    templesElement.innerHTML = "";

    array.forEach(temple => {
        const section = document.createElement("section");
        section.classList.add("temple-card");

        section.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Image" loading="lazy">
        `;

        templesElement.appendChild(section);
    });
}
function filterTemples(criteria) {
    let filtered = [];

    switch(criteria) {
        case "home":
            filtered = temples;
            break;
        case "old":
            filtered = temples.filter(t => t.year < 1900);
            break;
        case "new":
            filtered = temples.filter(t => t.year > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
    }

    displayTemples(filtered);
}
const navLinks = document.querySelectorAll("#mobile-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const criteria = link.getAttribute("data-filter");
        filterTemples(criteria);
    });
});
displayTemples(temples);