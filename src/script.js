const menuElement = document.getElementById("menu");
const menuContainerElement = document.getElementById("menu-container");

let toggle = true;

menuElement.addEventListener("click", () => {
    menuContainerElement.classList.toggle("show");
});