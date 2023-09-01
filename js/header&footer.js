// let $ = document

//load

let loader = $.querySelector('.loader')

window.addEventListener('load', () => {
    loader.style.display = 'none'
})


// top_btn
let topBtn = $.querySelector('.top_btn')

window.addEventListener('scroll', () => {

    if (window.scrollY >= 700) {
        topBtn.style.display = 'block'

    } else {
        topBtn.style.display = 'none'
    }
})

const scrollWindow = function () {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 50);
            scrollWindow();
        }, 10);
    }
};

topBtn.addEventListener("click", scrollWindow);


// header
let backBtn = $.querySelector('.back_btn')
let sidebar = $.querySelector('.sidebar')
let openSidebar = $.querySelector('.open_sidebar')
let sidebarMenu = $.querySelector('.sidebar_menu')
let sidebarListHov = $.querySelectorAll('.sidebar_list_hov')
let sidebarOpen = $.querySelector('.sidebar_open')

backBtn.addEventListener('click', () => {
    sidebar.classList.remove('open')
})
sidebarOpen.addEventListener('click', () => {
    sidebar.classList.remove('open')
})

openSidebar.addEventListener('click', () => {
    sidebar.classList.add('open')
})


sidebarListHov.forEach(item => {
    item.addEventListener('mouseover', () => {
        sidebarMenu.classList.add('sidebar_unset')
    })
})
sidebarListHov.forEach(item => {
    item.addEventListener('mouseout', () => {
        sidebarMenu.classList.remove('sidebar_unset')
    })
})

// darkLight
let darkLightBtn = $.querySelector('.dark_light_btn')

darkLightBtn.addEventListener('click', () => {
    $.body.classList.toggle('dark')
})


//setting box

let layaoutElem = $.querySelector('.layaout')

let layoutList = ['fashion', 'fashion2', 'fashion2', 'vegetable'
    , 'watch', 'Furniture', 'Flower', 'Beauty', 'Electronics',
    'Pets', 'gym', 'tools', 'Shoes', 'bags', 'Marijuana']

layoutList.forEach(layaout => {
    layaoutElem.insertAdjacentHTML('beforeend', `
    <div class="setting_item">
        <div class="setting_img"></div>
        <div>
            <h4>${layaout}</h4>
            <div class="setting_box_btn">
                <a href="">Preview</a>
            </div>
        </div>
    </div>
    `)
})

let shopElem = $.querySelector('.shop')

let shopList = ['Left Sidebar', 'Right Sidebar', 'No Sidebar']

shopList.forEach(shop => {
    shopElem.insertAdjacentHTML('beforeend', `
    <div class="setting_item">
        <div class="setting_img"></div>
        <div>
            <h4>${shop}</h4>
            <div class="setting_box_btn">
                <a href="">Preview</a>
            </div>
        </div>
    </div>
    `)
})

let productElem = $.querySelector('.product')

let productListSetting = ['Left Sidebar', 'Right Sidebar', 'No Sidebar',
    'Three Column', 'Four Image', 'Bundle Product', 'Image Outside']

    productListSetting.forEach(product => {
    productElem.insertAdjacentHTML('beforeend', `
    <div class="setting_item">
        <div class="setting_img"></div>
        <div>
            <h4>${product}</h4>
            <div class="setting_box_btn">
                <a href="">Preview</a>
            </div>
        </div>
    </div>
    `)
})


let settingBoxTitle = $.querySelectorAll('.setting_box_title')
let colorPicker = $.querySelector('.color_picker')
let rtlElem = $.querySelector('.rtl')

settingBoxTitle[0].addEventListener('click', () => {
    layaoutElem.classList.toggle('open')
})
settingBoxTitle[1].addEventListener('click', () => {
    shopElem.classList.toggle('open')
})
settingBoxTitle[2].addEventListener('click', () => {
    productElem.classList.toggle('open')
})
settingBoxTitle[3].addEventListener('click', () => {
    colorPicker.classList.toggle('open')
})
settingBoxTitle[4].addEventListener('click', () => {
    rtlElem.classList.toggle('open')
})


//back btn srtting
let settingBackBtn = $.querySelector('.setting_back_btn')
let settingBox = $.querySelector('.setting_box')
let settingBtn = $.querySelector('.setting_btn')

settingBackBtn.addEventListener('click',()=>{
    settingBox.classList.remove('active')
})

settingBtn.addEventListener('click',() => {
    settingBox.classList.add('active')
})