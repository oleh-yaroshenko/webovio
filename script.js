const menu = document.querySelector(".header-menu")
const showMenu = document.querySelector(".header-nav-burger")
const hideMenu = document.querySelector(".header-menu-top-burger")

showMenu.addEventListener("click", function() {
    menu.classList.add("header-menu-show")
})

hideMenu.addEventListener("click", function() {
    menu.classList.remove("header-menu-show")
})