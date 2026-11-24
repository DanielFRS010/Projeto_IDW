const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if(menuToggle && primaryNav){
    menuToggle.addEventListener("click", () =>{
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        const nextState = !isExpanded;

        menuToggle.setAttribute("aria-expanded", String(nextState));
        menuToggle.setAttribute(
            "aria-label",
            nextState ? "Fechar menu de navegação" : "Abrir menu de navegação"
        );
        primaryNav.classList.toggle("is-open", nextState);
    });
}