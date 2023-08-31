let $ = document

let paypalOption = $.querySelector('#paypal_option')
let stripeOption = $.querySelector('#stripe_option')
let paymentBtn = $.querySelector('.payment_btn_box')

paypalOption.addEventListener('change', () => {
    if (paypalOption.checked) {
        paymentBtn.classList.add('hidden_btn')
    } else {
        paymentBtn.classList.remove('hidden_btn')
    }

})

stripeOption.addEventListener('change', () => {
    if (stripeOption.checked) {
        paymentBtn.classList.remove('hidden_btn')
    } else {
        paymentBtn.classList.add('hidden_btn')
    }
})



//header sticky

let headerBottom = $.querySelector('.header_bottom')

document.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 200) {
        headerBottom.classList.add('sticky')
    } else {
        headerBottom.classList.remove('sticky')
    }
})

//////////////////////////////

let firstnameInput = $.querySelector('.firstname_input')
let lastnameInput = $.querySelector('.lastname_input')
let phoneInput = $.querySelector('.phone_input')
let emailaddressInput = $.querySelector('.emailaddress_input')
let addressInput = $.querySelector('.address_input')
let cityInput = $.querySelector('.city_input')
let stateInput = $.querySelector('.state_input')
let codeInput = $.querySelector('.code_input')

let firstname = $.querySelector('.firstname')
let lastname = $.querySelector('.lastname')
let phone = $.querySelector('.phone')
let emailaddress = $.querySelector('.emailaddress')
let address = $.querySelector('.address')
let city = $.querySelector('.town_city')
let state = $.querySelector('.state')
let code = $.querySelector('.postalCode')


function show_warning(inputElem, warningElem) {

    inputElem.addEventListener('blur', () => {
        if (!inputElem.value) {
            warningElem.classList.add('show')
        }
        inputElem.addEventListener('keydown', () => {

            if (!inputElem.value) {
                warningElem.classList.add('show')
            } else {
                warningElem.classList.remove('show')
            }
        })
    })
}

show_warning(firstnameInput, firstname)
show_warning(lastnameInput, lastname)
show_warning(phoneInput, phone)
show_warning(emailaddressInput, emailaddress)
show_warning(addressInput, address)
show_warning(cityInput, city)
show_warning(codeInput, code)
show_warning(stateInput, state)


/////////////

let inputElems = $.querySelectorAll('.user_input')
let orderBtn = $.querySelector('.payment_btn')
let userCountry = $.querySelector('.user_country')
let isfull = true
let num =[]

document.addEventListener('change', () => {
    console.log('jdsbh');
    inputElems.forEach(item => {

        if (!item.value) {
            isfull = false
            num.push(false)
        }
        else {
            num.push(false)
        }
    })
    if (userCountry.value == 'Select Country') {
        isfull = false
    } else {
        isfull = true
    }
    if (isfull) {
        orderBtn.classList.replace('disable', 'able')
    } else {
        orderBtn.classList.replace('able', 'disable')
    }
})