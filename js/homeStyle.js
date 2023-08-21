let $ = document

// let portfolio_item = $.querySelector("#portfolio_item")
// let add_item = $.querySelector("#add_item")

// let portfolioArray = [
//     'Portfolio Grid 2',
//     'Portfolio Grid 3',
//     'Portfolio Grid 4',
//     'Masonry-Grid-2',
//     'Masonry-Grid-3',
//     'Masonry-Grid-4',
//     'Masonry-Full-Width'
// ]

// let addArray = [
//     'Cart Right',
//     'Cart Left',
//     'Cart Top',
//     'Cart Bottom',
//     'Cart-Model-Popup'
// ]

// portfolioArray.forEach(item => {
//     portfolio_item.insertAdjacentHTML('beforeend',
//     `<li class="list_hov_item submenu_item_hov">
//         <a href="#" class="list_hov_link">${item}</a>
//     </li>`
//     )
// })

// addArray.forEach(item => {
//     add_item.insertAdjacentHTML('beforeend',
//     `<li class="list_hov_item submenu_item_hov">
//         <a href="#" class="list_hov_link">${item}</a>
//     </li>`
//     )
// })


// trending

let trendingContainer = $.querySelector('.trending_container')

let trendingArray = [
    { src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver' },
    { src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver' },
    { src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'silver' },
    { src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'silver' },
    { src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'silver' },
    { src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'silver' },
    { src: 'images/trending7.jpg', name: 'Watch 7', discountedPrice: '$122.20', price: '$130.00', colors: 'silver' },
    { src: 'images/trending4.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'silver' },
]

trendingArray.forEach(product => {

    trendingContainer.insertAdjacentHTML('beforeend',
        ` <div class="trending_product">
            <div class="trending_product_box">
                <div class="trending_img_box">
                     <span class="trending_new">
                      new
                    </span>
                    <a href="">
                    <img class="trending_img" src=${product.src} alt="">
                    </a>
                    <div class="trending_icons">
                        <a class="trending_icons_link" href="#">
                            <i class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                        </a>
    
                        <a class="trending_icons_link" href="#">
                         <i class="fa fa-heart shopping heart"></i>
                        </a>
    
                        <a class="trending_icons_link" href="#">
                            <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                        </a>
    
                        <a class="trending_icons_link" href="#">
                            <i class="fa fa-refresh shopping refresh"></i>
                        </a>
                    </div>
                </div>
            <div class="trending_detail">
                <div class="stars">
                    <div class="star">★</div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                    <div class="star">★</i></div>
                </div>
                <a href="">
                    <h6 class="trending_name">${product.name}</h6>
                </a>
                <h4 class="trending_discounted_price"> ${product.discountedPrice}
                    <del class="trending_price">${product.price}</del>
                </h4>
                <ul class="trending_color_list">
                    <li class="${product.colors} trending_color"></li>
                </ul>
            </div>
    
        </div>
    </div>`
    )
    console.log(product.colors);
})


