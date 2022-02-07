"use strict";

require('./slider');
require('./productThemeSwap');
const {sliderItems} = require("./jordanSliderItems");

const choosenProduct = sliderItems[0];
const currentProductImg = document.querySelector(".product__img");

const currentProductColors = document.querySelectorAll(".color");
const productButton = document.querySelector(".product__button");
const payment = document.querySelector(".payment");
const closeElem = document.querySelector(".payment__close");


currentProductColors.forEach(function (color, index) {
    color.addEventListener("click", function () {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

productButton.addEventListener("click", function () {
    payment.style.display = "flex";
});
closeElem.addEventListener("click", function () {
    payment.style.display = "none";
});
