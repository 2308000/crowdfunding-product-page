function showMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const closeMenuIcon = document.getElementById("close-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    body.style.background = "rgba(115, 115, 115, 0.5)";
    header.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/image-hero-mobile.jpg')";
    menuIcon.style.display = "none";
    menuIcon.style.pointerEvents = "none";
    closeMenuIcon.style.display = "inline";
    closeMenuIcon.style.pointerEvents = "auto";
    dropdownMenu.style.display = "block";
}

function closeMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const closeMenuIcon = document.getElementById("close-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    body.style.background = "transparent";
    header.style.background = "linear-gradient(transparent, transparent), url('./images/image-hero-mobile.jpg')";
    menuIcon.style.display = "inline";
    menuIcon.style.pointerEvents = "auto";
    closeMenuIcon.style.display = "none";
    closeMenuIcon.style.pointerEvents = "auto";
    dropdownMenu.style.display = "none";
}