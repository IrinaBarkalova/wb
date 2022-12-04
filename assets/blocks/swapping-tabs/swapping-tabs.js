turnBtns = document.querySelectorAll('.turn-btn')

turnBtns.forEach((button)=>{
    button.addEventListener('click', () =>{
        let arrow = button.querySelector('div')

        if (button.classList.contains('in-stock') && arrow.classList.contains('arrow-up') ){
            let items = document.querySelectorAll('.in-stock__goods_item')
            items.forEach((item) =>{
                item.classList.add('hidden-item')

            })
            arrow.classList.remove('arrow-up')
            arrow.style.transform = 'rotate(180deg)'
        }else if (button.classList.contains('in-stock')) {
            let items = document.querySelectorAll('.in-stock__goods_item')
            items.forEach((item) =>{
                item.classList.remove('hidden-item')

            })
            arrow.classList.add('arrow-up')
            arrow.style.transform = 'rotate(0deg)'
        } else if (button.classList.contains('unavailable') && arrow.classList.contains('arrow-up')){
            let items = document.querySelectorAll('.unavailable__goods_item')
            items.forEach((item) =>{
                item.classList.add('hidden-item')

            })
            arrow.classList.remove('arrow-up')
            arrow.style.transform = 'rotate(180deg)'
        } else if (button.classList.contains('unavailable')) {
            let items = document.querySelectorAll('.unavailable__goods_item')
            items.forEach((item) =>{
                item.classList.remove('hidden-item')

            })
            arrow.classList.add('arrow-up')
            arrow.style.transform = 'rotate(0deg)'
        }
    })
})