const modalCards = document.querySelector('.modal-wrapper.cards')
const modalCardsOpenBtns = document.querySelectorAll('.modal__btn-open.cards')
const modalCardsCloseBtn = document.querySelector('.modal__btn-close.cards')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('.body')

const modalDelivery = document.querySelector('.modal-wrapper.delivery')
const modalDeliveryOpenBtns = document.querySelectorAll('.modal__btn-open.delivery')
const modalDeliveryCloseBtn = document.querySelector('.modal__btn-close.delivery')

const modalBtnCards = document.querySelector('.btn-main.cards')
const modalBtnDelivery = document.querySelector('.btn-main.delivery')

const cardsFields = document.querySelectorAll('.card-info__number.for-change')

const cardsTarget = document.querySelectorAll('.modal__main_item.cards')

const cardsInputs = document.querySelectorAll('input[name="card"]')
const addressesInputs = document.querySelectorAll('input[name="address"]')
const ppInputs = document.querySelectorAll('input[name="pp"]')

const deliveryWrappers = document.querySelectorAll('.delivery-wrapper-change')

changeCart(cardsInputs)
changeAddress(addressesInputs)
changePp(ppInputs)

function changeCart(inputs) {
    let id;
    inputs.forEach((input) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                id = input.id;
                let label = document.querySelector(`label[for=${id}]`)
                let targetNode = label.querySelector('p')
                let targetClass = targetNode.className.split(' ').at(-1)
                let text = targetNode.textContent
                modalBtnCards.addEventListener('click', () => {
                    cardsFields.forEach((field) => {
                        field.textContent = text;
                        field.className = `card-info__number for-change ${targetClass}`
                    })
                    modalCards.classList.remove('active')
                    overlay.classList.remove('active')
                    body.classList.remove('overflow-blocked')
                })


            }
        })
    })
    modalBtnCards.addEventListener('click', () => {
        modalCards.classList.remove('active')
        overlay.classList.remove('active')
        body.classList.remove('overflow-blocked')
    })
}


function changeAddress(inputs) {
    let deliveryId;
    inputs.forEach((input) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                deliveryId = input.id;
                let label = document.querySelector(`label[for=${deliveryId}]`)
                let targetNode = label.querySelector('.address-text')
                let text = targetNode.textContent
                modalBtnDelivery.addEventListener('click', () => {
                    deliveryWrappers.forEach((field) => {
                        field.querySelector('.delivery-heading-change').textContent = 'Доставка курьером'
                        field.querySelector('.delivery-address-change').textContent = text
                        if (field.querySelector('.delivery-contacts-change')) {
                            field.querySelector('.delivery-contacts-change').classList.add('visually-hidden')
                        }
                    })
                    modalCards.classList.remove('active')
                    overlay.classList.remove('active')
                    body.classList.remove('overflow-blocked')
                })


            }
        })
    })
    modalBtnDelivery.addEventListener('click', () => {
        modalDelivery.classList.remove('active')
        overlay.classList.remove('active')
        body.classList.remove('overflow-blocked')
    })
}

function changePp(inputs) {
    let ppId;
    inputs.forEach((input) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                ppId = input.id;
                let label = document.querySelector(`label[for=${ppId}]`)
                let targetNode = label.querySelector('.address-text')
                let text = targetNode.textContent
                modalBtnDelivery.addEventListener('click', () => {
                    deliveryWrappers.forEach((field) => {
                        if (field.classList.contains('sum-block')) {
                            field.querySelector('.delivery-heading-change').textContent = 'Доставка в пункт выдачи'
                        } else {
                            field.querySelector('.delivery-heading-change').textContent = 'Пункт выдачи'
                        }
                        field.querySelector('.delivery-address-change').textContent = text
                        if (field.querySelector('.delivery-contacts-change')) {
                            field.querySelector('.delivery-contacts-change').classList.remove('visually-hidden')
                        }
                    })
                    modalCards.classList.remove('active')
                    overlay.classList.remove('active')
                    body.classList.remove('overflow-blocked')
                })


            }
        })
    })
    modalBtnDelivery.addEventListener('click', () => {
        modalDelivery.classList.remove('active')
        overlay.classList.remove('active')
        body.classList.remove('overflow-blocked')
    })
}

modalCardsOpenBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalCards.classList.add('active')
        overlay.classList.add('active')
        body.classList.add('overflow-blocked')
    })
})

modalCardsCloseBtn.addEventListener('click', () => {
    modalCards.classList.remove('active')
    overlay.classList.remove('active')
    body.classList.remove('overflow-blocked')
})

modalDeliveryOpenBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalDelivery.classList.add('active')
        overlay.classList.add('active')
        body.classList.add('overflow-blocked')
    })
})
modalDeliveryCloseBtn.addEventListener('click', () => {
    modalDelivery.classList.remove('active')
    overlay.classList.remove('active')
    body.classList.remove('overflow-blocked')
})