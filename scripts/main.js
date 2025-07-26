const DOM = {
    navMenu: document.querySelector(".nav__menu"),
    navMenuOpen: document.querySelector(".nav__menu__open"),
    navMenuClose: document.querySelector(".nav__menu__close"),
}

const NavMenu = (function (){
    const menuActive = false;
    const mediaQuery = window.matchMedia("(min-width: 48rem)")
    const NavMenuFocusableElements = DOM.navMenu.querySelectorAll("a, button");

    function openMenu(){
        DOM.navMenu.classList.add("nav__menu--active");
        DOM.navMenu.setAttribute("aria-hidden", "false");
        trapFocus();
        lockScroll();
    }
    function closeMenu(){
        DOM.navMenu.classList.remove("nav__menu--active");
        DOM.navMenu.setAttribute("aria-hidden", "true");
        removeFocusIndexing();
        unlockScroll();
    }

    function handleMediaQueryChange(event){
        closeMenu();
        if(event.matches){
            DOM.navMenu.setAttribute("aria-hidden", "false");
            addFocusIndexing();
        }
        else{
            DOM.navMenu.setAttribute("aria-hidden", "true");
            removeFocusIndexing();
        }
    }
    
    // Methods for the focus management
    function removeFocusIndexing(){
        NavMenuFocusableElements.forEach((elem)=>{
            elem.setAttribute("tabindex", "-1");
        })
    }

    function addFocusIndexing(){
        NavMenuFocusableElements.forEach((elem)=>{
            elem.removeAttribute("tabindex");
        });
    }

    function trapFocus(){
        addFocusIndexing();
        const firstFocusableElement = NavMenuFocusableElements[0];
        const lastFocusableElement = NavMenuFocusableElements[NavMenuFocusableElements.length - 1];

        window.addEventListener("keydown", (event)=>{
            if(event.key === "Tab"){
                if(event.shiftKey){
                    // Shift + Tab
                    if(document.activeElement === firstFocusableElement){
                        event.preventDefault();
                        lastFocusableElement.focus();
                    }
                } else {
                    // Tab
                    if(document.activeElement === lastFocusableElement){
                        event.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }
        });
    }

    // Methods for scroll management
    function lockScroll(){
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.setProperty("--scroll-bar-width", `${scrollBarWidth}px`);
    }


    function unlockScroll(){
        document.body.style.overflow = "";
        document.body.style.setProperty("--scroll-bar-width", "0px");
    }


    DOM.navMenuClose.addEventListener("click", closeMenu);
    DOM.navMenuOpen.addEventListener("click", openMenu);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
})()
