const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = new Date(document.lastModified);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString(undefined, options);

document.getElementById("lastModified").textContent = `Last modified: ${formattedDate}`;


const temperature = 8;
const windSpeed  = 21;

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {

        return 13.12 + 0.6215 * (temp) - 11.37 * (wind ** 0.16) + 0.3965 * (temp) * (wind ** 0.16)
    }
    else {
        return 'N/A'
    }
}

const windChill = calculateWindChill(temperature, windSpeed)

document.getElementById("windChill").textContent = `${windChill}`;



