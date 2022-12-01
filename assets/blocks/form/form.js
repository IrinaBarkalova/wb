const inputs = document.querySelectorAll('.inputs__item')

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
    })
})