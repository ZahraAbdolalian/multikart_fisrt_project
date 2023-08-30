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