var hamburger = document.getElementById('hamburger');
var nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('nav__open')
});
