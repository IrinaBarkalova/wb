const checkboxOrder = document.getElementById('immediate-payment')
const btnOrder = document.querySelector('.order-btn');
const sumNumber = document.querySelector('.sum-number')
const oldSumNumber = document.querySelector('.old-price')
const discount = document.querySelector('.sum-content.discount')

const prices = document.querySelectorAll('.goods__price_item.actual')
let sum = 0;
prices.forEach((price) => {
    sum += Number(price.textContent.replace(/[^0-9]/g, ''));
})
sumNumber.textContent = `${sum.toLocaleString()} сом`

const oldPrices = document.querySelectorAll('.goods__price_item.old')
let oldSum = 0;
oldPrices.forEach((oldPrice) => {
    oldSum += Number(oldPrice.textContent.replace(/[^0-9]/g, ''));
})
oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`

let discountNumber = oldSum - sum;
discount.textContent = `-${discountNumber.toLocaleString()} сом`


checkboxOrder.addEventListener('click', () => {
    if (checkboxOrder.checked) {
        btnOrder.textContent = `Оплатить ${sumNumber.textContent}`
    } else {
        btnOrder.textContent = 'Заказать'
    }
})