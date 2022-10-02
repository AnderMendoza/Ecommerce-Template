//show ctg menu
const ctgButton = document.querySelector('.ctg-cat .ctg-trigger'),
    ctgClass = document.querySelector('.site');
ctgButton.addEventListener('click', function() {
    ctgClass.classList.toggle('showctg')
})