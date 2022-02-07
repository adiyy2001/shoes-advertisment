const wrapper = document.querySelector(".slider__wrapper");
const menuItems = document.querySelectorAll(".nav__bottom__item");
const currentProductTitle = document.querySelector(".product__details__title");
const currentProductPrice = document.querySelector(".product__details__price");

menuItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
        wrapper.style.transform = "translateX(" + -100 * index + "vw)";
        choosenProduct = sliderItems[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductColors.forEach(function (color, index) {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});