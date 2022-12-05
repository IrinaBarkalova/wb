const inStockGoodsItems = document.querySelectorAll('.in-stock__goods_item')
const allCheckbox = document.getElementById('all')
const inStockGoodsSmallWrapper = document.querySelector('.block__content_item-goods')

let counter = 3;

inStockGoodsItems.forEach((good) => {
    let id = good.getAttribute('data-good')
    let checkbox = good.querySelector('.in-stock-checkbox')
    let targetElements = document.querySelectorAll(`.image-wrapper[data-smallgood="${id}"]`);
    let info = good.querySelector('.goods__item_info')
    let price = good.querySelector('.goods__price_item.actual')
    let oldPrice = good.querySelector('.goods__price_item.old')
    info.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
            targetElements.forEach((targetElement) => {
                targetElement.classList.remove('hidden-item')
                if (targetElement.parentNode.children.length > 0) {
                    let wrapper = targetElement.closest('.block__content_item')
                    wrapper.classList.remove('hidden-item')
                }
            })
            sum += Number(price.textContent.replace(/[^0-9]/g, ''));
            sumNumber.textContent = `${sum.toLocaleString()} сом`

            oldSum += Number(oldPrice.textContent.replace(/[^0-9]/g, ''));
            oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`

            let discountNumber = oldSum - sum;
            discount.textContent = `-${discountNumber.toLocaleString()} сом`

            counter++

        } else {
            targetElements.forEach((targetElement) => {
                targetElement.classList.add('hidden-item')
                if (targetElement.parentNode.children.length === 1) {
                    let wrapper = targetElement.closest('.block__content_item')
                    wrapper.classList.add('hidden-item')
                }
            })
            counter--
            sum -= Number(price.textContent.replace(/[^0-9]/g, ''));
            sumNumber.textContent = `${sum.toLocaleString()} сом`

            oldSum -= Number(oldPrice.textContent.replace(/[^0-9]/g, ''));
            oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`

            let discountNumber = oldSum - sum;
            discount.textContent = `-${discountNumber.toLocaleString()} сом`

        }
        allCheckbox.checked = counter >= 3;
        if (counter === 0) {
            targetElements.forEach((targetElement) => {
                let wrapper = targetElement.closest('.block__content_item')
                wrapper.classList.add('hidden-item')
            })
        }
    })
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            console.log(targetElements);
            targetElements.forEach((targetElement) => {
                targetElement.classList.remove('hidden-item')
                if (targetElement.parentNode.children.length > 0) {
                    let wrapper = targetElement.closest('.block__content_item')
                    wrapper.classList.remove('hidden-item')
                }
            })
            console.log('plis');
            sum += Number(price.textContent.replace(/[^0-9]/g, ''));
            sumNumber.textContent = `${sum.toLocaleString()} сом`

            oldSum += Number(oldPrice.textContent.replace(/[^0-9]/g, ''));
            oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`
            counter++

            let discountNumber = oldSum - sum;
            discount.textContent = `-${discountNumber.toLocaleString()} сом`
        } else {
            console.log('minus');
            targetElements.forEach((targetElement) => {
                targetElement.classList.add('hidden-item')
                if (targetElement.parentNode.children.length === 1) {
                    let wrapper = targetElement.closest('.block__content_item')
                    wrapper.classList.add('hidden-item')
                }
            })
            sum -= Number(price.textContent.replace(/[^0-9]/g, ''));
            sumNumber.textContent = `${sum.toLocaleString()} сом`
            oldSum -= Number(oldPrice.textContent.replace(/[^0-9]/g, ''));
            oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`
            counter--

            let discountNumber = oldSum - sum;
            discount.textContent = `-${discountNumber.toLocaleString()} сом`
        }
        allCheckbox.checked = counter >= 3;
        if (counter === 0) {
            targetElements.forEach((targetElement) => {
                let wrapper = targetElement.closest('.block__content_item')
                wrapper.classList.add('hidden-item')
            })
        }
    })

})

allCheckbox.addEventListener('click', () => {
    if (allCheckbox.checked) {
        inStockCheckboxes.forEach((item) => {
            item.checked = true;
        })
        let smallGoods = document.querySelectorAll('.image-wrapper[data-smallgood]')
        smallGoods.forEach((item) => {
            item.classList.remove('hidden-item')
            let wrapper = item.closest('.block__content_item')
            wrapper.classList.remove('hidden-item')
        })
        inStockGoodsItems.forEach((item) => {
            let price = item.querySelector('.goods__price_item.actual')
            sum += Number(price.textContent.replace(/[^0-9]/g, ''));
            let oldPrice = item.querySelector('.goods__price_item.old')
            oldSum += Number(oldPrice.textContent.replace(/[^0-9]/g, ''));

        })
        sumNumber.textContent = `${sum.toLocaleString()} сом`;
        oldSumNumber.textContent = `${oldSum.toLocaleString()} сом`
        let discountNumber = oldSum - sum;
        discount.textContent = `-${discountNumber.toLocaleString()} сом`
    } else {
        inStockCheckboxes.forEach((item) => {
            item.checked = false;
        })
        let smallGoods = document.querySelectorAll('.image-wrapper[data-smallgood]')
        smallGoods.forEach((item) => {
            item.classList.add('hidden-item')
            let wrapper = item.closest('.block__content_item')
            wrapper.classList.add('hidden-item')
        })
        sum = 0;
        sumNumber.textContent = '0 сом';
        oldSum = 0;
        oldSumNumber.textContent = '0 сом';
        let discountNumber = 0;
        discount.textContent = `-0 сом`
    }
})