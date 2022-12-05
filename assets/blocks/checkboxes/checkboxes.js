const inStockGoodsItems = document.querySelectorAll('.in-stock__goods_item')
const allCheckbox = document.getElementById('all')
const inStockGoodsSmallWrapper = document.querySelector('.block__content_item-goods')

let counter = 0;

inStockGoodsItems.forEach((good) => {
    let id = good.getAttribute('data-good')
    let checkbox = good.querySelector('.in-stock-checkbox')
    let targetElement = document.querySelector(`.image-wrapper[data-smallgood="${id}"]`);

    let info = good.querySelector('.goods__item_info')
    info.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
            targetElement.classList.remove('hidden-item')
            let wrapper = targetElement.closest('.block__content_item')
            wrapper.classList.add('hidden-item')
        } else {
            targetElement.classList.add('hidden-item')
        }
    })
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            targetElement.classList.remove('hidden-item')
            counter++;
        } else {
            targetElement.classList.add('hidden-item')
            counter--;
        }
        if (counter < 3) {
            allCheckbox.checked = false;
        }
    })

})

allCheckbox.addEventListener('click', () => {
    if (allCheckbox.checked) {
        inStockCheckboxes.forEach((item) => {
            item.checked = true;
        })
    } else {
        inStockCheckboxes.forEach((item) => {
            item.checked = false;
        })
        let smallGoods = inStockGoodsSmallWrapper.querySelectorAll('.image-wrapper')
        smallGoods.forEach((item) => {
            item.classList.add('hidden-item')
        })
        let wrapper = smallGoods.closest('.block__content_item')
        wrapper.classList.add('hidden-item')
    }
})