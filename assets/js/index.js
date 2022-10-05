//show ctg menu
const ctgButton = document.querySelector('.ctg-cat .ctg-trigger'),
    ctgClass = document.querySelector('.site');
ctgButton.addEventListener('click', function() {
    ctgClass.classList.toggle('showctg')
})


//slider
const swiper = new Swiper('.swiper', {
    loop: true,

    //if we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});