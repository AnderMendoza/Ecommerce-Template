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
