let $ = document


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


// new product

let newProductArray = [
    { name: 'Watch 1', url: 'images/trending1.jpg', newPrice: '$156.00', oldPrice: '$260.00' },
    { name: 'Watch 2', url: 'images/trending2.jpg', newPrice: '$207.00', oldPrice: '$345.00' },
    { name: 'Watch 3', url: 'images/trending3.jpg', newPrice: '$356.00', oldPrice: '$445.00' },
    { name: 'Watch 4', url: 'images/trending4.jpg', newPrice: '$466.40', oldPrice: '$530.00' },
    { name: 'Watch 5', url: 'images/trending5.jpg', newPrice: '$215.40', oldPrice: '$420.00' },
    { name: 'Watch 6', url: 'images/trending6.jpg', newPrice: '$135.00', oldPrice: '$225.00' }
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

let relatedProductList =[
    { id: 1, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
    { id: 5, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
]

relatedProductList.forEach(product => {
    relatedProductsContainer.insertAdjacentHTML('beforeend' , `

        <div class="related_product_item">
            <div class="related_product_item_box">
                <div class="related_product_img_box">
                    <span class="new_sapn">
                        new
                    </span>
                    <a href="">
                        <img class="related_product_img" src="${product.src}" alt="">
                        
                     </a>
                    <div class="related_product_icons">
                        <a class="related_product_icons_link" href="#">
                                <i
                                class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                        </a>
                
                        <a class="related_product_icons_link" href="#">
                                <i class="fa fa-heart shopping heart"></i>
                        </a>
                
                        <a class="related_product_icons_link" href="#">
                            <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                        </a>
                
                        <a class="related_product_icons_link" href="#">
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
                `<li class="${color} product_color"></li>`
            )
        })

        if (product.onsale) {
            productImgBox[product.id- 1].insertAdjacentHTML('afterbegin',
                `<span class="product_on_sale">
            on sale
        </span>`
            )
        }
})