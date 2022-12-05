const inStockGoods = document.querySelector('.in-stock__goods')
const goodsNumber = inStockGoods.childElementCount
const goodsCounters = document.querySelectorAll('.cart-counter')

goodsCounters.forEach((counter) => {
    counter.textContent = String(goodsNumber);
})

const inStockCheckboxes = document.querySelectorAll('.in-stock-checkbox')

inStockCheckboxes.forEach((item) => {
    if (item.checked) {
        counter++;
    }
    if (counter < 3) {
        allCheckbox.checked = false;
    }
    item.addEventListener('change', () => {
        if (!item.checked) {
            counter--;
        }
        if (item.checked) {
            counter++;
        }
        if (counter < 3) {
            allCheckbox.checked = false;
        }
    })
})
allCheckbox.checked = counter === inStockCheckboxes.length;

const sizes = document.querySelectorAll('.size')


sizes.forEach((size) => {
    if (window.innerWidth < 500) {
        size.textContent = size.textContent.replace(/[^0-9, /.]/g, '');
        size.classList.remove('visually-hidden')
        size.classList.add('small-square')
    }
})