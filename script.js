// HTML Elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay')
const nav = [];

// Toggle Menu
function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate In - Nav Items
        for (let i = 1; i < 6; i++) {
            nav[i].classList.replace(`slide-out-${i}`,`slide-in-${i}`);
        }
    } else {
        // Animate Out
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animate Out - Nav Items
        for (let i = 1; i < 6; i++) {
            nav[i].classList.replace(`slide-in-${i}`,`slide-out-${i}`);
        }
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);

// Set Navigation Links
for (let i = 1; i < 6; i++) {
    nav[i] = document.getElementById(`nav-${i}`);
    nav[i].addEventListener('click', toggleNav);
}