const burger = document.querySelector('.mobile-burger'),
      mobile_nav = document.querySelector('.mobile-nav'),
      mobile_nav_overlay = document.querySelector('.mobile-nav-overlay');
let n = 0;

burger.addEventListener('click', () => {
    mobile_nav.classList.toggle('block');
    mobile_nav_overlay.classList.toggle('block');
    n++;
    changeBurger(n);
})

function changeBurger(b) {
    b%2 == 0 ? burger.src = './images/icon-hamburger.svg'  : burger.src = './images/icon-close.svg';
}