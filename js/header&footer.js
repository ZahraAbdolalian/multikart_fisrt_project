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
