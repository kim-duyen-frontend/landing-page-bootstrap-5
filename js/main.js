const menuIconEle = document.querySelector(".menu-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const closeIcon = document.querySelector(".close-icon");

menuIconEle.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
})
closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});