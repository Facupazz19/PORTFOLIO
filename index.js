const menuBtn = document.querySelector('.block');
const navbar = document.querySelector('#nav-content');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});
