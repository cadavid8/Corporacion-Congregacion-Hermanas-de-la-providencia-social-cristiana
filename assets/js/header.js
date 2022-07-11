const NavBurger = document.querySelector(".nav-burger");
const NavLista = document.querySelector(".menu");

NavBurger.addEventListener("click", () => {
    NavLista.classList.toggle("menu_visible");

    if (NavLista.classList.contains("menu_visible")){
        NavBurger.setAttribute("arial-label", "cerrar menu");
    }else{
        NavBurger.setAttribute("arial-label", "abrir menu");
    }
const MenuLink = document.querySelectorAll(".menu a[href^=\"#\"]");
MenuLink.forEach(MenuLink =>{
    MenuLink.addEventListener("click", function(){
        NavLista.classList.remove("menu_visible");
    })
})
});