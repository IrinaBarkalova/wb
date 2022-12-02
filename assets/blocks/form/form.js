const inputs = document.querySelectorAll('.inputs__item')
const orderBtn = document.querySelector('.order-btn')

inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        let label = document.querySelector(`[for="${input.id}"]`);
        label.classList.add('mini')
    })
    input.addEventListener('blur', () => {
        let label = document.querySelector(`[for="${input.id}"]`);
        if (input.value === '') {
            label.classList.remove('mini')
        }
        if (input.value !== ''){
            if(input.id === 'name' || input.id === 'surname'){
                const NAME_REGEXP = /^[А-Яа-яЁё\s-]+$/;
                if(!NAME_REGEXP.test(input.value)){
                    input.classList.add('invalid')
                } else {
                    input.classList.remove('invalid')
                }
            }
            if(input.id === 'email'){
                const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
                if(!EMAIL_REGEXP.test(input.value)){
                    input.classList.add('invalid')
                    input.parentElement.querySelector('.subtext').textContent = 'Проверьте адрес электронной почты'
                } else {
                    input.classList.remove('invalid')
                }
            }
            if(input.id === 'tel'){
                const TEL_REGEXP = /^[\d\+][\d\(\)\ -]{10,30}\d$/;
                if(!TEL_REGEXP.test(input.value)){
                    input.classList.add('invalid')
                    input.parentElement.querySelector('.subtext').textContent = 'Формат: +9 999 999 99 99'
                }else {
                    input.classList.remove('invalid')
                }
            }
            if(input.id === 'index'){
                const INDEX_REGEXP = /^([1-9]\d{1,10})$/;

                if(!INDEX_REGEXP.test(input.value)){
                    input.classList.add('invalid')
                    input.parentElement.querySelector('.subtext').textContent = 'Формат: 1234567'
                }else {
                    input.classList.remove('invalid')
                }
            }
        }
    })
    orderBtn.addEventListener('click',() => {
        if (input.value === ''){
            input.offsetParent.classList.add('warning')
            if (input.id === 'email') {
                input.parentElement.querySelector('.subtext').textContent = 'Укажите электронную почту'
            }
            if (input.id === 'tel') {
                input.parentElement.querySelector('.subtext').textContent = 'Укажите электронную почту'
            }
            if (input.id === 'index') {
                input.parentElement.querySelector('.subtext').textContent = 'Укажите электронную почту'
            }
        }
    })


})



