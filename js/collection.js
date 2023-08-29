let $ = document


// open
let categoryTitle = $.querySelector('.category_title')
let categoryList = $.querySelector('.category_list')

let brandTitle = $.querySelector('.brand_title')
let brandName = $.querySelector('.brand_name')

let colorsTitle = $.querySelector('.colors_title')
let colorBox = $.querySelector('.color_box')

let priceTitle = $.querySelector('.price_title')
let rangeSlider = $.querySelector('.price_box')

categoryTitle.addEventListener('click', () => {
    categoryList.classList.toggle('open')
})

brandTitle.addEventListener('click', () => {
    brandName.classList.toggle('open')
})

colorsTitle.addEventListener('click', () => {
    colorBox.classList.toggle('open')
})

priceTitle.addEventListener('click', () => {
    rangeSlider.classList.toggle('open')
})


//category

let categoryArray = [
    'fashion', 'shoes', 'bags', 'watch'
    , 'flower', 'pets', 'electronics'
    , 'vegetables', 'furniture', 'beauty'
    , 'tools', 'gym', 'marijuana']

categoryArray.forEach(category => {
    categoryList.insertAdjacentHTML('beforeend', `
    <li>
        <a href=""> ${category} </a>
    </li>
    `)
})
//colors

let colorsArray = [
    'silver', 'sienna', 'navy', 'bisque',
    'chocolate', 'steelblue', 'wheat',
    'dimgrey', 'black', 'palegoldenrod', 'dimgray']


colorsArray.forEach(color => {
    colorBox.insertAdjacentHTML('beforeend', `
    <div class="collection_item">
        <input type="checkbox" value="${color}" id="${color}">
        <span class="color_item ${color}"></span>
        <label for="${color}">${color}</label>
    </div>
    `)
    let colorSpan = $.querySelector(`.${color}`)
    colorSpan.style.backgroundColor = color
})


//rangeSlider

const rangeSlider_min = 0;
const rangeSlider_max = 1000;

document.querySelector('#RangeSlider .range-slider-val-left').style.width = `${rangeSlider_min + (100 - rangeSlider_max / 10)}%`;
document.querySelector('#RangeSlider .range-slider-val-right').style.width = `${rangeSlider_min + (100 - rangeSlider_max / 10)}%`;

document.querySelector('#RangeSlider .range-slider-val-range').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-val-range').style.right = `${(100 - rangeSlider_max / 10)}%`;

document.querySelector('#RangeSlider .range-slider-handle-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-handle-right').style.left = `${rangeSlider_max / 10}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-tooltip-right').style.left = `${rangeSlider_max / 10}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left .range-slider-tooltip-text').innerText = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-tooltip-right .range-slider-tooltip-text').innerText = rangeSlider_max;

document.querySelector('#RangeSlider .range-slider-input-left').value = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-input-left').addEventListener('input', e => {
    e.target.value = Math.min(e.target.value, e.target.parentNode.childNodes[5].value - 1);
    var value = (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.min);

    var children = e.target.parentNode.childNodes[1].childNodes;
    children[1].style.width = `${value}%`;
    children[5].style.left = `${value}%`;
    children[7].style.left = `${value}%`;
    children[11].style.left = `${value}%`;

    children[11].childNodes[1].innerHTML = e.target.value;
});

document.querySelector('#RangeSlider .range-slider-input-right').value = rangeSlider_max;
document.querySelector('#RangeSlider .range-slider-input-right').addEventListener('input', e => {
    e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[3].value - (-1));
    var value = (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min))) * parseInt(e.target.min);

    var children = e.target.parentNode.childNodes[1].childNodes;
    children[3].style.width = `${100 - value}%`;
    children[5].style.right = `${100 - value}%`;
    children[9].style.left = `${value}%`;
    children[13].style.left = `${value}%`;

    children[13].childNodes[1].innerHTML = e.target.value;
});


let sliderNumber = $.querySelectorAll('.range-slider-tooltip-text')
let inputLeft = $.querySelector('.range-slider-input-left')
let inputRight = $.querySelector('.range-slider-input-right')
let leftText = $.querySelector('.left_text')
let rightText = $.querySelector('.right_text')
console.log(sliderNumber);

inputLeft.addEventListener('mousemove', () => {
    console.log(sliderNumber[0].innerHTML);
    if (sliderNumber[0].innerHTML > 79) {
        leftText.classList.add('show_text')
    } else {
        leftText.classList.remove('show_text')
    }
})
inputRight.addEventListener('mousemove', () => {
    console.log(sliderNumber[0].innerHTML);
    if (sliderNumber[1].innerHTML < 787) {
        rightText.classList.add('show_text')
    } else {
        rightText.classList.remove('show_text')
    }
})


// new product

let newProductArray = [
    { name: 'Trim Dress', url: 'images/new product1.jpg', newPrice: '$87.00', oldPrice: '$145.00' },
    { name: 'Belted Dress', url: 'images/new product2.jpg', newPrice: '$111.00', oldPrice: '$185.00' },
    { name: 'Fitted Dress', url: 'images/new product3.jpg', newPrice: '$104.40', oldPrice: '$174.00' },
    { name: 'Belted Top', url: 'images/new product4.jpg', newPrice: '$49.00', oldPrice: '$98.00' },
    { name: 'Waist Dress', url: 'images/new product5.jpg', newPrice: '$184.00', oldPrice: '$230.00' },
    { name: 'Crop Top', url: 'images/new product6.jpg', newPrice: '$72.60', oldPrice: '$121.00' }
]

let newProductBox = $.querySelector('.new_product_box')
let angleLeft = $.querySelector('.new_angle_left')
let angleRight = $.querySelector('.new_angle_right')

let currentSlid = 1
let rowCount = 3

function displayNewProduct() {
    newProductBox.innerHTML = ''

    let endIndex = rowCount * currentSlid
    let startIndex = endIndex - rowCount

    let paginatedNew = newProductArray.slice(startIndex, endIndex)

    paginatedNew.forEach(product => {
        newProductBox.insertAdjacentHTML('beforeend', `
    <div class="new_product_content">
        <a href="">
            <img class="new_product_img" src="${product.url}" alt="new product">
        </a>
        <div>
            <a href="" class="new_product_name">${product.name}</a>
            <h4 class="new_product_price"> ${product.newPrice}
                <del> ${product.oldPrice} </del>
            </h4>
        </div>
    </div>
    `)
    })
}

displayNewProduct()

function changeSlid () {
    if (currentSlid > 1) {
        currentSlid--
    } else {
        currentSlid++
    }
    displayNewProduct()
}

angleLeft.addEventListener('click', changeSlid)
angleRight.addEventListener('click', changeSlid)



