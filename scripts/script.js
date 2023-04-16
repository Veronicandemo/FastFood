'use strict'
const addCart = document.querySelectorAll('.add_to_cart')

addCart.forEach( button => 
    button.addEventListener('click', () => {
        button.textContent = 'Item Added  🎉'

    })
    )
