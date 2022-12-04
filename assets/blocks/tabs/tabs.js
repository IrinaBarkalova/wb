const radioBtns = document.querySelectorAll('.tabs__input')

radioBtns.forEach(btn => {
    btn.onchange = () => {
        if (btn.checked) {
            let id = btn.getAttribute('data-tab');
            document.querySelector(`.tabs-address__content.active[data-content]`).classList.remove('active')
            let elementContent = document.querySelector(`.tabs-address__content[data-content="${id}"]`)
            elementContent.classList.add('active')
        }
    }
});
