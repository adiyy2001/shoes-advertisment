const currentProductSizes = document.querySelectorAll(".size");


currentProductSizes.forEach(function (size) {
    size.addEventListener("click", function () {
        currentProductSizes.forEach(function (size) {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});