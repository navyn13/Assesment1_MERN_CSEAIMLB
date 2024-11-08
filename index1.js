document.querySelector(".convert").addEventListener('click', (e) => {
    e.preventDefault();
    var amountUSD = document.querySelector('.usd').value;
    var amountINR = amountUSD * 84;
    
    document.querySelector(".inr").textContent = amountINR;
});
