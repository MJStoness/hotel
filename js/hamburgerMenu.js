const hamburgerToggle = document.querySelector(".hamburger-container input[type='checkbox']");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerToggle.onclick = () => {
    if ( hamburgerToggle.checked ) {
        hamburgerMenu.classList.remove("hidden");
    } else {
        hamburgerMenu.classList.add("hidden");
    }
}

/* const hideMenu = () => {
    hamburgerToggle.checked = false;
    hamburgerMenu.classList.add("hidden");
}

const scrollThreshold = 100;
window.onscroll = function() {
    if ( window.scrollY > scrollThreshold ) hideMenu();
} */