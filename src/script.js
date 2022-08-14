const menuElement = document.getElementById("menu");
const menuContainerElement = document.getElementById("menu-container");

let toggle = true;

menuElement.addEventListener("click", () => {
    menuContainerElement.classList.toggle("show");
});





const linksElements = document.getElementsByClassName("animated_link");



const toggleUnderline  = (element) => {
    element.children[0].classList.toggle("change_opacity");
}

for (let i = 0; i < linksElements.length; i++) {
    const element = linksElements[i];
    element.addEventListener("mouseover", () => toggleUnderline(element));
    element.addEventListener("mouseleave", () => toggleUnderline(element));
}



