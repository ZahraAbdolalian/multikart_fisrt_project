let $ = document

//header sticky

let headerBottom = $.querySelector('.header_bottom')

document.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 200) {
        headerBottom.classList.add('sticky')
    } else {
        headerBottom.classList.remove('sticky')
    }
})



// quantity button

let quantityNumber = $.querySelector('.quantity_num')
let quantityBtnLeft = $.querySelector('.quantity_btn_left')
let quantityBtnRight = $.querySelector('.quantity_btn_right')
let quantityLinkBtn = $.querySelectorAll('.quantity_link_btn')
let alretContainer = $.querySelector('.alret_container')
let alertMark = $.querySelector('.alert_mark')


quantityBtnLeft.addEventListener('click', () => {
    let num = quantityNumber.innerHTML

    if (num > 1) {
        num--
        quantityNumber.innerHTML = num
    }

})

quantityBtnRight.addEventListener('click', () => {
    let num = quantityNumber.innerHTML
    if (num < 15) {

        num++
        quantityNumber.innerHTML = num
    }

    if (num > 15) {
        alretContainer.classList.remove('disable')
        setTimeout(() => {
            alretContainer.classList.add('disable')
        }, 2000)
    }
})

alertMark.addEventListener('click', () => {
    alretContainer.classList.add('disable')
})


// total product price
let productTotalPrice = $.querySelector('.product_total_price')
let quantityNum = $.querySelector('.quantity_num')
let productPrice = $.querySelector('.product_price').innerHTML.slice(2)

function setTotalProductPrice() {
    productTotalPrice.innerHTML = `$${(quantityNum.innerHTML * productPrice).toFixed(2)}`
}

setTotalProductPrice()

quantityBtnLeft.addEventListener('click', setTotalProductPrice)
quantityBtnRight.addEventListener('click', setTotalProductPrice)

// total price

let allProductPrice = $.querySelectorAll('.product_total_price')
let totalPrice = $.querySelector('#price_amount')
let result = 0

function setTotalPrice() {
    result = 0
    allProductPrice.forEach(price => {
        result += +price.innerHTML.slice(1)
    })
    totalPrice.innerHTML = `$${result.toFixed(2)}`
}
setTotalPrice()

quantityBtnLeft.addEventListener('click', setTotalPrice)
quantityBtnRight.addEventListener('click', setTotalPrice)