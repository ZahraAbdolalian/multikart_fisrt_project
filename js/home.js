let $ = document

// //load

// let loader = $.querySelector('.loader')

// window.addEventListener('load', () => {
//     loader.style.display = 'none'
// })


// // top_btn
// let topBtn = $.querySelector('.top_btn')

// window.addEventListener('scroll', () => {

//     if (window.scrollY >= 700) {
//         topBtn.style.display = 'block'

//     } else {
//         topBtn.style.display = 'none'
//     }
// })

// const scrollWindow = function () {
//     if (window.scrollY != 0) {
//         setTimeout(function () {
//             window.scrollTo(0, window.scrollY - 50);
//             scrollWindow();
//         }, 10);
//     }
// };

// topBtn.addEventListener("click", scrollWindow);


// // header
// let backBtn = $.querySelector('.back_btn')
// let sidebar = $.querySelector('.sidebar')
// let openSidebar = $.querySelector('.open_sidebar')
// let sidebarMenu = $.querySelector('.sidebar_menu')
// let sidebarListHov = $.querySelectorAll('.sidebar_list_hov')
// let sidebarOpen = $.querySelector('.sidebar_open')

// backBtn.addEventListener('click', () => {
//     sidebar.classList.remove('open')
// })
// sidebarOpen.addEventListener('click', () => {
//     sidebar.classList.remove('open')
// })

// openSidebar.addEventListener('click', () => {
//     sidebar.classList.add('open')
// })


// sidebarListHov.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         sidebarMenu.classList.add('sidebar_unset')
//     })
// })
// sidebarListHov.forEach(item => {
//     item.addEventListener('mouseout', () => {
//         sidebarMenu.classList.remove('sidebar_unset')
//     })
// })

//slider
let sliderArray = [
    { id: 1, subtitile: 'Every Time', title: 'Mittnalier', url: '../images/9.jpg' },
    { id: 2, subtitile: 'Welcome To Fashion', title: 'Men Watch', url: '../images/10.jpg' },
]

let numberOfItem = 1

let slider = $.querySelector('.slider')
let arrowLeft = $.querySelector('.arrow_left')
let arrowRight = $.querySelector('.arrow_right')
let sliderContents = $.querySelector('.slider_contents')



function sliderHandler() {
    sliderContents.innerHTML = ''

    if (numberOfItem === 1) {
        sliderContents.insertAdjacentHTML('afterbegin',
            `
        <h4 class="slider_subtitile">${sliderArray[1].subtitile}</h4>
        <h1 class="slider_title">${sliderArray[1].title}</h1>
        <a href="collection.html" class="slider_btn">Shop now</a>
        `
        )
        slider.classList.replace('slider_bgi1', 'slider_bgi2')
        numberOfItem = 2
    } else {

        sliderContents.insertAdjacentHTML('afterbegin',
            ` 
        <h4 class="slider_subtitile">${sliderArray[0].subtitile}</h4>
        <h1 class="slider_title">${sliderArray[0].title}</h1>
        <a href="collection.html" class="slider_btn">Shop now</a>
        `
        )
        slider.classList.replace('slider_bgi2', 'slider_bgi1')
        numberOfItem = 1
    }
}

arrowLeft.addEventListener('click', sliderHandler)
arrowRight.addEventListener('click', sliderHandler)


// trending part1

let trendingContainer = $.querySelector('.trending_container')
let trendingListSelector = $.querySelectorAll('.trending_list_link ')
let trendingColorList
let colorsArray
let trendingImgBox
let trendingSelector = trendingListSelector[0]





let newArrivalArray = [
    { id: 1, index: 0, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, index: 1, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, index: 2, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, index: 3, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
    { id: 5, index: 4, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, index: 5, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 7, index: 6, src: 'images/trending7.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 4, index: 7, src: 'images/trending4.jpg', name: 'Watch 16', discountedPrice: '$80.00', price: '$160.00', colors: 'bisque palegoldenrod silver', onsale: false },
]

let onSaleArray = [
    { id: 5, index: 0, src: 'images/trending5.jpg', name: 'Watch 5', discountedPrice: '$218.40', price: '$420.00', colors: 'chocolate navy', onsale: true },
    { id: 6, index: 1, src: 'images/trending6.jpg', name: 'Watch 6', discountedPrice: '$135.00', price: '$225.00', colors: 'steelblue bisque', onsale: false },
    { id: 8, index: 2, src: 'images/watch8.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'dimgrey sienna', onsale: false },
    { id: 10, index: 3, src: 'images/watch10.jpg', name: 'Watch 10', discountedPrice: '$346.50 ', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 13, index: 4, src: 'images/watch13.jpg', name: 'Watch 13', discountedPrice: '$144.00 ', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 14, index: 5, src: 'images/watch15.jpg', name: 'Watch 14', discountedPrice: '$122.20', price: '$130.00', colors: 'silver wheat', onsale: false },
    { id: 2, index: 6, src: 'images/trending2.jpg', name: 'Watch 15', discountedPrice: '$239.04 ', price: '$249.00', colors: 'sienna navy', onsale: true },
    { id: 4, index: 7, src: 'images/trending4.jpg', name: 'Watch 16', discountedPrice: '$80.00 ', price: '$160.00', colors: 'bisque palegoldenrod silver', onsale: false },
]

let bestSellersArray = [
    { id: 15, index: 0, src: 'images/watch7.jpg', name: 'Watch 7', discountedPrice: '$156.60 ', price: '$174.00', colors: 'wheat silver', onsale: false },
    { id: 8, index: 1, src: 'images/watch8.jpg', name: 'Watch 8', discountedPrice: '$132.30 ', price: '$189.00', colors: 'dimgrey sienna', onsale: false },
    { id: 9, index: 2, src: 'images/watch9.jpg', name: 'Watch 8', discountedPrice: '$80.00', price: '$160.00', colors: 'black sienna', onsale: false },
    { id: 10, index: 3, src: 'images/watch10.jpg', name: 'Watch 10', discountedPrice: '$346.50 ', price: '$495.00', colors: 'silver palegoldenrod', onsale: true },
    { id: 11, index: 4, src: 'images/watch11.jpg', name: 'Watch 11', discountedPrice: '$86.00 ', price: '$215.00', colors: 'dimgray chocolate', onsale: false },
    { id: 12, index: 5, src: 'images/watch12.jpg', name: 'Watch 12', discountedPrice: '$135.00', price: '$150.00', colors: 'palegoldenrod bisque', onsale: true },
    { id: 13, index: 6, src: 'images/watch13.jpg', name: 'Watch 13', discountedPrice: '$144.00 ', price: '$360.00', colors: 'black chocolate', onsale: true },
    { id: 6, index: 7, src: 'images/trending6.jpg', name: 'Watch 14', discountedPrice: '$265.05', price: '$285.00', colors: 'steelblue black', onsale: true },
]

function addProductToContainer(product) {
    trendingContainer.insertAdjacentHTML('beforeend',
        ` <div class="trending_product">
        <div class="trending_product_box">
            <div class="trending_img_box">
                 <span class="trending_new">
                  new
                 </span>
                <a href="productDetails.html?id=${product.id}">
                <img class="trending_img" src=${product.src} alt="">
                </a>
                <div class="trending_icons">
                    <a title="Add to cart" class="trending_icons_link" href="#">
                        <i class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                    </a>

                    <a title="Add to Wishlist" class="trending_icons_link" href="#">
                     <i class="fa fa-heart shopping heart"></i>
                    </a>

                    <a title="Quick View" class="trending_icons_link" href="#">
                        <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                    </a>

                    <a title="Compare" class="trending_icons_link" href="#">
                        <i class="fa fa-refresh shopping refresh"></i>
                    </a>
                </div>
            </div>
        <div class="trending_detail">
            <div class="stars">
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
                <div class="star">★</div>
            </div>
            <a href="">
                <h6 class="trending_name">${product.name}</h6>
            </a>
            <h4 class="trending_discounted_price"> ${product.discountedPrice}
                <del class="trending_price">${product.price}</del>
            </h4>

            <ul class="trending_color_list">

            </ul>
            
        </div>

    </div>
</div>`
    )
    trendingColorList = $.querySelectorAll('.trending_color_list')
    colorsArray = product.colors.split(' ')
    trendingImgBox = $.querySelectorAll('.trending_img_box')
    colorsArray.forEach(color => {
        trendingColorList[product.index].insertAdjacentHTML('beforeend',
            `<li class="${color} trending_color"></li>`
        )
    })

    if (product.onsale) {
        trendingImgBox[product.index].insertAdjacentHTML('afterbegin',
            `<span class="trending_on_sale">
        on sale
    </span>`
        )
    }
}

newArrivalArray.forEach(product => {
    addProductToContainer(product)
})

trendingListSelector.forEach(selector => {

    selector.addEventListener('click', () => {
        trendingContainer.innerHTML = ''
        console.log(selector);
        trendingSelector.classList.remove('selected')
        selector.classList.add('selected')
        trendingSelector = selector

        if (selector.innerHTML == 'new arrival') {
            console.log('yes');
            newArrivalArray.forEach(product => {
                addProductToContainer(product)
            })
        } else if (selector.innerHTML == 'on sale') {

            onSaleArray.forEach(product => {
                addProductToContainer(product)
            })
        } else {
            bestSellersArray.forEach(product => {
                addProductToContainer(product)
            })
        }
    })
})



// trending part2

let trendingContainer2 = $.querySelector('.trending_container_part2')

let trendingArray2 = [
    { id: 1, src: 'images/trending1.jpg', name: 'Watch 1', discountedPrice: '$156.00', price: '$260.00', colors: 'silver', onsale: false },
    { id: 2, src: 'images/trending2.jpg', name: 'Watch 2', discountedPrice: '$207.00', price: '$345.00', colors: 'silver sienna', onsale: false },
    { id: 3, src: 'images/trending3.jpg', name: 'Watch 3', discountedPrice: '$356.00', price: '$445.00', colors: 'navy', onsale: true },
    { id: 4, src: 'images/trending4.jpg', name: 'Watch 4', discountedPrice: '$466.40', price: '$530.00', colors: 'bisque', onsale: true },
]

trendingArray2.forEach(product => {

    trendingContainer2.insertAdjacentHTML('beforeend',
        `<div class="trending_product_part2">
        <div class="trending_product_box">
            <div class="trending_img_box_part2">
                <span class="trending_new">
                    new
                </span>
                <a href="productDetails.html?id=${product.id}">
                    <img class="trending_img" src="${product.src}" alt="">
                </a>
                <div class="trending_icons_part2">
                    <a title="Add to cart" class="trending_icons_link" href="#">
                        <i class="fa fa-shopping-cart fa-flip-horizontal shopping shopping_cart"></i>
                    </a>

                    <a title="Add to Wishlist" class="trending_icons_link" href="#">
                        <i class="fa fa-heart shopping heart"></i>
                    </a>

                    <a title="Quick View" class="trending_icons_link" href="#">
                        <i class="fa-solid fa-magnifying-glass shopping magnifying"></i>
                    </a>

                    <a title="Compare" class="trending_icons_link" href="#">
                        <i class="fa fa-refresh shopping refresh"></i>
                    </a>
                </div>
            </div>
            <div class="trending_detail">
                <div class="stars stars_part2">
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
                <ul class="trending_color_list_part2">
                    
                </ul>
            </div>

        </div>
    </div>`
    )
    trendingColorList = $.querySelectorAll('.trending_color_list_part2')
    colorsArray = product.colors.split(' ')
    trendingImgBox = $.querySelectorAll('.trending_img_box_part2')
    colorsArray.forEach(color => {
        trendingColorList[product.id - 1].insertAdjacentHTML('beforeend',
            `<li class="${color} trending_color"></li>`
        )
    })

    if (product.onsale) {
        trendingImgBox[product.id - 1].insertAdjacentHTML('afterbegin',
            `<span class="trending_on_sale">
            on sale
        </span>`
        )
    }

})

// recent_story
let recentStoryBox = $.querySelector(".recent_story_box")

let storyArray = [
    { src: 'images/recent1.jpg', time: '25 January 2018' },
    { src: 'images/recent2.jpg', time: '26 January 2018' },
    { src: 'images/recent3.jpg', time: '27 January 2018' }
]

storyArray.forEach(story => {
    recentStoryBox.insertAdjacentHTML('beforeend',
        ` <div class="recent_detail">
    <a href="#">
        <div class="recent_img_box">
            <img class="recent_img" src="${story.src}" alt="recent story">
            <span class="recent_effect"></span>
        </div>
    </a>
    <div class="recent_info">
        <h4 class="recent_h4">${story.time}</h4>
        <a href="">
            <p class="recent_text">Lorem ipsum dolor sit consectetur adipiscing elit,</p>
        </a>
        <hr class="recent_line">
        <p class="recent_author">by:John Dio , 2 Comment</p>
    </div>
    </div>`
    )
})

