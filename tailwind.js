
let icon = document.getElementById("menu-btn")
let cancel = document.getElementById("del-icon")


const menu = document.getElementById("menu")

icon.addEventListener('click', ()=>{
    menu.style.display = "block"
    icon.style.display = "none"
    cancel.style.display = "block"
})


cancel.addEventListener('click', ()=>{
    menu.style.display = "none"
    icon.style.display = "block"
    cancel.style.display = "none"
})