const menuButton = document.getElementById("menu");
const nav = document.getElementById("mobile-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});




const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

document.getElementById('prev')?.addEventListener('click', () => {
    testimonials[index].classList.remove('active');
    index = (index - 1 + testimonials.length) % testimonials.length;
    testimonials[index].classList.add('active');
});

document.getElementById('next')?.addEventListener('click', () => {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
});




document.addEventListener('DOMContentLoaded', () => {
    const pickup = document.getElementById('pickup');
    const delivery = document.getElementById('delivery');
    const addressDiv = document.getElementById('delivery-options');
    const addressInput = document.getElementById('address');
    const form = document.querySelector('form');

    function toggleDelivery() {
        if (delivery.checked) {
            addressDiv.style.display = 'block'; 
            addressInput.required = true;
        } else {
            addressDiv.style.display = 'none';  
            addressInput.required = false;
        }
    }


    toggleDelivery();


    pickup.addEventListener('change', toggleDelivery);
    delivery.addEventListener('change', toggleDelivery);

   
    form.addEventListener('submit', (event) => {
        const order = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            cakeSize: document.getElementById('cakeSize').value,
            cakeLayers: document.getElementById('cakeLayers').value,
            cakeFlavor: document.getElementById('cakeFlavor').value,
            frostingFlavor: document.getElementById('frostingFlavor').value,
            cakeColor: document.getElementById('cakeColor').value,
            customMessage: document.getElementById('customMessage').value,
            deliveryOption: document.querySelector('input[name="deliveryOption"]:checked').value,
            address: addressInput.value,
            deliveryDate: document.getElementById('deliveryDate').value
        };

        localStorage.setItem('lastOrder', JSON.stringify(order));
        alert(`Thanks, ${order.name}! Your ${order.cakeLayers}-layer ${order.cakeSize}" ${order.cakeFlavor} cake has been added to a list, and we'll get back to you on details.`);
    });
});