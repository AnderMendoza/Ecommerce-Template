//copy menu for mobile
function copyMenu() {
    //copy inside .ctg-cat to .categories
    var ctgCategory = document.querySelector('.ctg-cat');
    var ctgPlace = document.querySelector('.categories');
    ctgPlace.innerHTML = ctgCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site')
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})


//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand') {
        this.closest('.has-child').classList.toggle('expand');
    }
}

// show ctg menu
const ctgButton = document.querySelector('.ctg-cat .ctg-trigger'),
      ctgClass = document.querySelector('.site');
ctgButton.addEventListener('click', function() {
    ctgClass.classList.toggle('showctg')
})

//show search
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})

