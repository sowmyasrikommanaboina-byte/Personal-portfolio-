const billingToggle = document.getElementById('billing-toggle');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

billingToggle.addEventListener('change', function() {
    if (this.checked) {
        // Toggle is ON: Show Yearly, Hide Monthly
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
    } else {
        // Toggle is OFF: Show Monthly, Hide Yearly
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
    }
});
    
