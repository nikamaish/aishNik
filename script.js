let isOpen = false;
function toggleMenu() {
    isOpen = !isOpen;
    document.getElementById('navbar-items').classList.toggle('block', isOpen);
    document.getElementById('navbar-items').classList.toggle('hidden', !isOpen);
    document.getElementById('menu-icon').setAttribute('d', isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7');
}