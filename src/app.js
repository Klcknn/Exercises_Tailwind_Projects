const menu = document.getElementById("menu");
const menu_btn = document.getElementById('menu-btn');
menu_btn.addEventListener("click" , navToggle);

function navToggle() { 
    menu_btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");

}