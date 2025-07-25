const DOM = {
    navMenu: document.querySelector(".nav__menu"),
    navMenuOpen: document.querySelector(".nav__menu__open"),
    navMenuClose: document.querySelector(".nav__menu__close"),
}

const NavMenu = (function (){
    const menuActive = false;

    function openMenu(){
        DOM.navMenu.classList.add("nav__menu--active");
        DOM.navMenu.setAttribute("aria-hidden", "false");
    }
    function closeMenu(){
        DOM.navMenu.classList.remove("nav__menu--active");
        DOM.navMenu.setAttribute("aria-hidden", "true");
    }

    DOM.navMenuOpen.addEventListener("click", openMenu);
    DOM.navMenuClose.addEventListener("click", closeMenu);


    const mediaQuery = window.matchMedia("(min-width: 48rem)")

    function handleMediaQueryChange(event){
        closeMenu();
        if(event.matches){
            DOM.navMenu.setAttribute("aria-hidden", "false");
        }
        else{
            DOM.navMenu.setAttribute("aria-hidden", "true");
        }
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
})()