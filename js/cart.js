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


quantityBtnLeft.addEventListener('click', () => {
    let num = quantityNumber.innerHTML

    if (num > 1) {
        num--
        quantityNumber.innerHTML = num
    }

    if (num <= 15) {
        quantityLinkBtn.forEach(button => {
            button.classList.replace('disable', 'able')
            button.href = ''
        })
    }
})

quantityBtnRight.addEventListener('click', () => {
    let num = quantityNumber.innerHTML
    num++
    quantityNumber.innerHTML = num

    if (num > 15) {
        quantityLinkBtn.forEach(button => {
            button.classList.replace('able', 'disable')
            button.href = ' URL:void(0)'
        })
    }
})
