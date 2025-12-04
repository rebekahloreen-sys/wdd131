let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
    reviewCount = 0;
}
else {
    reviewCount = parseInt(reviewCount);
}

reviewCount += 1;

localStorage.setItem("reviewCount", reviewCount);

const counterElement = document.getElementById("review-counter");
counterElement.textContent = `Reviews submitted: ${reviewCount}`;