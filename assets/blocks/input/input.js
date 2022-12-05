const checkboxOrder = document.getElementById("immediate-payment");
const btnOrder = document.querySelector(".order-btn");
const sumNumber = document.querySelector(".sum-number");
const oldSumNumber = document.querySelector(".old-price");
const discount = document.querySelector(".sum-content.discount");
const stockCheckboxes = document.querySelectorAll(".in-stock-checkbox");
const prices = document.querySelectorAll(".goods__price_item.actual");
const oldPrices = document.querySelectorAll(".goods__price_item.old");
let sum = 0;
let oldSum = 0;

prices.forEach((price) => {
  sum += Number(price.textContent.replace(/[^0-9]/g, ""));
  sumNumber.textContent = `${sum.toLocaleString()} сом`;
});

oldPrices.forEach((oldPrice) => {
  oldSum += Number(oldPrice.textContent.replace(/[^0-9]/g, ""));
  oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`;
});

checkboxOrder.addEventListener("click", () => {
  if (checkboxOrder.checked) {
    btnOrder.textContent = `Оплатить ${sumNumber.textContent}`;
  } else {
    btnOrder.textContent = "Заказать";
  }
});
