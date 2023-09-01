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

// open
let categoryTitle = $.querySelector('.category_title')
let categoryList = $.querySelector('.category_list')


categoryTitle.addEventListener('click', () => {
    categoryList.classList.toggle('open')
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




//add product

let productsArray = [
    { id: 1, src: 'images/trending1.jpg', src2: 'images/trending1.jpg images/watch1_2.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', src2: 'images/trending2.jpg images/trending1.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'sienna silver', onsale: false },
    { id: 3, src: 'images/trending3.jpg', src2: 'images/trending3.jpg images/watch3_1.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', src2: 'images/trending4.jpg images/watch10.jpg images/watch7.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque palegoldenrod silver', onsale: true },
    { id: 5, src: 'images/trending5.jpg', src2: 'images/trending5.jpg images/trending3.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, src: 'images/trending6.jpg', src2: 'images/trending6.jpg images/trending4.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 7, src: 'images/trending7.jpg', src2: 'images/trending7.jpg images/watch1_2.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 8, src: 'images/watch8.jpg', src2: 'images/watch8.jpg images/watch8_2.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'dimgrey sienna', onsale: false },
    { id: 9, src: 'images/watch9.jpg', src2: 'images/watch9.jpg images/trending2.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'black sienna', onsale: false },
    { id: 10, src: 'images/watch10.jpg', src2: 'images/watch10.jpg images/watch12.jpg', name: 'Watch 10', discountedPrice: '$346.50 ', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 11, src: 'images/watch11.jpg', src2: 'images/watch11.jpg images/watch1_2.jpg', name: 'Watch 11', discountedPrice: '$86.00 ', price: '$215.00', colors: 'dimgray chocolate', onsale: false },
    { id: 12, src: 'images/watch12.jpg', src2: 'images/watch12.jpg images/watch1_2.jpg', name: 'Watch 12', discountedPrice: '$135.00', price: '$150.00', colors: 'palegoldenrod bisque', onsale: true },
    { id: 13, src: 'images/watch13.jpg', src2: 'images/watch13.jpg images/trending5.jpg', name: 'Watch 13', discountedPrice: '$144.00 ', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 14, src: 'images/watch15.jpg', src2: 'images/watch15.jpg images/watch1_2.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 15, src: 'images/watch7.jpg', src2: 'images/watch7.jpg images/watch1_2.jpg', name: 'Watch 7', discountedPrice: '$156.60 ', price: '$174.00', colors: 'wheat silver', onsale: false },
]

let productBox = $.querySelector('.product_box_right')
let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')
console.log(mainProductId);

let mainProductObject = productsArray.find(function (product) {
    return product.id === +mainProductId
})

console.log(mainProductObject);

productBox.insertAdjacentHTML('beforeend', `
<div class="product_box_right_img">
    <img class="main_img" src="${mainProductObject.src}" alt="">
    <div class="product_all_img">
        
    </div>
</div>
<div class="product_box_right_infos">
    <div class="product_details">
        <h2 class="product_name">${mainProductObject.name}</h2>
        <h4 class="product_discount_price">
            <del>${mainProductObject.discountedPrice}</del>
            <span>40% Off</span>
        </h4>
        <h3 class="product_price"> ${mainProductObject.price} </h3>
        <ul class="product_color">
            
        </ul>
    </div>
    <div class="product_quantity quantity_wrapper">
        <h5 class="stock">In Stock</h5>
        <h6>quantity</h6>
        <div class="quantity_box">
            <button class="quantity_btn quantity_btn_left" type="button">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div class="quantity_num">1</div>
            <button class="quantity_btn quantity_btn_right" type="button">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        <div class="quantity_link">
            <a class="able quantity_link_btn" href="cart.html?id=${mainProductObject.id}">add to cart</a>
            <a class="able quantity_link_btn" href="checkout.html">buy now</a>
        </div>
    </div>
    <div class="product_details">
        <h6>product details</h6>
        <p>It is a long established fact that a reader will be distracted by the readable content of
            a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distrib...</p>
    </div>
    <div class="product_media">
        <h6>share it</h6>
        <div>
            <div class="media_icons">
                <ul>
                    <li>
                        <a href="">
                            <i _ngcontent-serverapp-c2628554100="" class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i _ngcontent-serverapp-c2628554100="" class="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i _ngcontent-serverapp-c2628554100="" class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="instagram">
                            <i _ngcontent-serverapp-c2628554100="" class="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="wishlist_btn">
                <button>
                    <i _ngcontent-serverapp-c3931259297="" class="fa fa-heart"></i>
                    <span>Add To WishList</span>
                </button>
            </div>
        </div>
    </div>
    <div class="product_reminder">
        <h6>Time Reminder</h6>
        <div>
            <p>
                <span class="timer_box">
                    <span class="timer_num day">-861</span>
                    <span class="timer_dot">:</span>
                    <span class="timer_cal">Days</span>
                </span>
                <span class="timer_box">
                    <span class="timer_num hour">-13</span>
                    <span class="timer_dot">:</span>
                    <span class="timer_cal">Hrs</span>
                </span>
                <span class="timer_box">
                    <span class="timer_num minute">-2</span>
                    <span class="timer_dot">:</span>
                    <span class="timer_cal">Min</span>
                </span>
                <span class="timer_box">
                    <span class="timer_num second">-8</span>
                    <span class="timer_cal">Sec</span>
                </span>
            </p>
        </div>
    </div>
</div>
`)

let colorList = $.querySelector('.product_color')
let colorsArray = mainProductObject.colors.split(' ')

colorsArray.forEach(color => {
    colorList.insertAdjacentHTML('beforeend',
        `<li class="${color}"></li>`
    )
})

let colorSelected = $.querySelector(`.${colorsArray[0]}`)
colorSelected.classList.add('selected')

let imageSrcArray = mainProductObject.src2.split(' ')
let productAllImg = $.querySelector('.product_all_img')
console.log(imageSrcArray);

imageSrcArray.forEach(imageSrc => {
    productAllImg.insertAdjacentHTML('beforeend', `
    <div>
        <img class="product_imgs" src="${imageSrc}" alt="">
    </div>
    `)
})
let productImg = $.querySelector('.product_imgs')
let allProductImg = $.querySelectorAll('.product_imgs')
let mainImgElem = $.querySelector('.main_img')
let lastColor = colorSelected
let lastImg = productImg
productImg.classList.add('selected_img')


colorsArray.forEach((color, index) => {
    let colorElem = $.querySelector(`.${color}`)
    colorElem.addEventListener('click', () => {
        lastImg.classList.remove('selected_img')
        lastColor.classList.remove('selected')

        colorElem.classList.add('selected')
        allProductImg[index].classList.add('selected_img')
        lastColor = colorElem
        lastImg = allProductImg[index]
        mainImgElem.src = imageSrcArray[index]

    })
})

// new product

let newProductArray = [
    { id: 1, name: 'Watch 1', url: 'images/trending1.jpg', newPrice: '$156.00', oldPrice: '$260.00' },
    { id: 2, name: 'Watch 2', url: 'images/trending2.jpg', newPrice: '$207.00', oldPrice: '$345.00' },
    { id: 3, name: 'Watch 3', url: 'images/trending3.jpg', newPrice: '$356.00', oldPrice: '$445.00' },
    { id: 4, name: 'Watch 4', url: 'images/trending4.jpg', newPrice: '$466.40', oldPrice: '$530.00' },
    { id: 5, name: 'Watch 5', url: 'images/trending5.jpg', newPrice: '$215.40', oldPrice: '$420.00' },
    { id: 6, name: 'Watch 6', url: 'images/trending6.jpg', newPrice: '$135.00', oldPrice: '$225.00' }
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
        <a href="productDetails.html?id=${product.id}">
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

function changeSlid() {
    if (currentSlid > 1) {
        currentSlid--
    } else {
        currentSlid++
    }
    displayNewProduct()
}

angleLeft.addEventListener('click', changeSlid)
angleRight.addEventListener('click', changeSlid)

//related product

let relatedProductsContainer = $.querySelector('.related_product_list')

let relatedProductList = [
    { id: 1, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
    { id: 5, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
]

relatedProductList.forEach(product => {
    relatedProductsContainer.insertAdjacentHTML('beforeend', `

        <div class="related_product_item">
            <div class="related_product_item_box">
                <div class="related_product_img_box">
                    <span class="new_sapn">
                        new
                    </span>
                    <a href="productDetails.html?id=${product.id}">
                        <img class="related_product_img" src="${product.src}" alt="">
                        
                     </a>
                    <div class="related_product_icons">
                        <a class="related_product_icons_link" href="#" title="Add to cart">
                                <i
                                class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                        </a>
                
                        <a class="related_product_icons_link" href="#" title="Add to Wishlist">
                                <i class="fa fa-heart shopping heart"></i>
                        </a>
                
                        <a class="related_product_icons_link" href="#" title="Quick View">
                            <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                        </a>
                
                        <a class="related_product_icons_link" href="#" title="Compare">
                            <i class="fa fa-refresh shopping refresh"></i>
                        </a>
                    </div>
                </div>
                <div class="related_product_detail">
                    <div class="stars">
                        <div class="star">★</div>
                        <div class="star">★</div>
                        <div class="star">★</div>
                        <div class="star">★</div>
                        <div class="star">★</div>
                    </div>
                    <a href="">
                            <h6 class="related_product_name">${product.name}</h6>
                    </a>
                        <h4 class="related_product_discounted_price"> ${product.discountedPrice}
                            <del class="related_product_price">${product.price}</del>
                        </h4>
                    <ul class="related_product_color_list">
                        
                    </ul>
                
                </div>
                
            </div>
        </div>

    `)

    let productColorList = $.querySelectorAll('.related_product_color_list')
    let colorsArray = product.colors.split(' ')
    let productImgBox = $.querySelectorAll('.related_product_img_box')
    colorsArray.forEach(color => {
        productColorList[product.id - 1].insertAdjacentHTML('beforeend',
            `<li class="${color} related_product_color"></li>`
        )
    })

    if (product.onsale) {
        productImgBox[product.id - 1].insertAdjacentHTML('afterbegin',
            `<span class="product_on_sale">
            on sale
        </span>`
        )
    }
})



// quantity button

let quantityNumber = $.querySelector('.quantity_num')
let quantityBtnLeft = $.querySelector('.quantity_btn_left')
let quantityBtnRight = $.querySelector('.quantity_btn_right')
let stock = $.querySelector('.stock')
let quantityLinkBtn = $.querySelectorAll('.quantity_link_btn')


quantityBtnLeft.addEventListener('click', () => {
    let num = quantityNumber.innerHTML

    if (num > 1) {
        num--
        quantityNumber.innerHTML = num
    }

    if (num <= 15) {
        stock.innerHTML = 'In Stock'
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
        stock.innerHTML = 'Out of Stock'
        quantityLinkBtn.forEach(button => {
            button.classList.replace('able', 'disable')
            button.href = ' URL:void(0)'
        })
    }
})


//change main image

let mainImg = $.querySelector('.main_img')
let productImgs = $.querySelectorAll('.product_imgs')
let oldSrc = mainImg.src
productImgs.forEach(img => {
    img.addEventListener('click', () => {
        productImgs.forEach(image => {
            if (image.src == oldSrc) {
                image.classList.remove('selected_img')
            }
        })
        console.log(img.src);
        mainImg.src = img.src
        img.classList.add('selected_img')
        oldSrc = img.src
    })
})


// time reminder
let day = $.querySelector('.day')
let hour = $.querySelector('.hour')
let minute = $.querySelector('.minute')
let second = $.querySelector('.second')


setInterval(function () {

    let time = new Date()

    let dayValue = 800 - time.getDay()
    let hoursValue = time.getHours()
    let minutesValue = time.getMinutes()
    let secondsValue = time.getSeconds()

    day.innerHTML = `-${dayValue}`
    hour.innerHTML = `-${hoursValue}`
    minute.innerHTML = `-${minutesValue}`
    second.innerHTML = `-${secondsValue}`
}, 1000)


// product_right_bottom
let description = $.querySelector('.description_title')
let descriptionContent = $.querySelector('.description_content')
let video = $.querySelector('.video_title')
let videoContent = $.querySelector('.video_content')
let writeReview = $.querySelector('.write_review_title')
let writeReviewContent = $.querySelector('.write_review_content')
let selectedElem = description
let showContent = descriptionContent


function changeContent(elem, content) {
    selectedElem.classList.remove('active')
    showContent.classList.replace('show', 'unshow')
    elem.classList.add('active')
    content.classList.replace('unshow', 'show')
    selectedElem = elem
    showContent = content
}

description.addEventListener('click', () => {
    changeContent(description, descriptionContent)
})

video.addEventListener('click', () => {
    changeContent(video, videoContent)
})

writeReview.addEventListener('click', () => {
    changeContent(writeReview, writeReviewContent)
})


