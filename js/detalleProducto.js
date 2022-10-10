//Product image
const main_img = document.querySelector(".main_img")
const thumbnails = document.querySelectorAll(".thumbnail")
const active = document.querySelector(".active")

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function () {
        const active = document.querySelector(".active")
        active.classList.remove("active")
        this.classList.add("active")
        main_img.src = this.src
    })
})

//Quantity button
var data = 0;
document.getElementById("root").innerText = data;
function decrement() {
    data = data - 1;
    document.getElementById("root").innerText = data;

}
function increment() {
    data = data + 1;
    document.getElementById("root").innerText = data;
}

//Like button
$(document).ready(function () {
    $(".like-button").click(function () {
        $(".like-button").toggleClass("heart-active")
        $(".like").toggleClass("heart-active")
        $(".heart").toggleClass("heart-active")
    });
});

//Report collapse
var botones = document.querySelectorAll(".btn-expandir");
var textos_expandir = document.querySelectorAll(".texto_expandir");

botones.forEach((elemento, clave) => {
    elemento.addEventListener("click", () => {
        textos_expandir[clave].classList.toggle("open_close")
    })
});

// show ctg menu
const ctgButton = document.querySelector('.ctg-cat .ctg-trigger'),
      ctgClass = document.querySelector('.site');
ctgButton.addEventListener('click', function() {
    ctgClass.classList.toggle('showctg')
})