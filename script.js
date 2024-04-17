function toggleMenu() {
    let navMenu = document.querySelector('.right-side')
    let hamburger = document.querySelector('.hamburger-icon')

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
}   