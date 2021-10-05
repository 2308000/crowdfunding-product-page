// OPENING AND CLOSING MENU ON MOBILE DEVICES

function showMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const closeMenuIcon = document.getElementById("close-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const overlay = document.getElementById("overlay");

    overlay.classList.add("overlay");
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
    const overlay = document.getElementById("overlay");

    overlay.classList.remove("overlay");
    menuIcon.style.display = "inline";
    menuIcon.style.pointerEvents = "auto";
    closeMenuIcon.style.display = "none";
    closeMenuIcon.style.pointerEvents = "auto";
    dropdownMenu.style.display = "none";
}

// PROGRESS BAR
const convertStringToFloat = amount => {
    const cutTo = amount.indexOf(',');
    const stringAmount = `${amount.substring(0, cutTo)} ${amount.substring(cutTo + 1, amount.length)}`;
    const toConvert = stringAmount.replace(' ', '');
    return parseFloat(toConvert);
}

const progressBar = document.getElementById("progress-bar");
const computedStyle = getComputedStyle(progressBar);
const collected = convertStringToFloat(document.getElementById("collected").textContent);
const needed = convertStringToFloat(document.getElementById("needed").textContent);
progressBar.style.setProperty("--width", collected/needed);

//RADIO BUTTON TOGGLE 
const buttons = document.getElementsByClassName("radio-button");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        const buttonClicked = e.target;
        const currentValueOfDisplay = getComputedStyle(buttonClicked);
        if(currentValueOfDisplay.getPropertyValue("--display-check") == "block") {
            buttonClicked.style.setProperty("--display-check", "none");
            const label = buttonClicked.parentElement;
            const h4 = label.parentElement;
            const card = h4.parentElement;
            for(let j = 0; j < card.childNodes.length; j++) {
                if(card.childNodes[j].className === "cta")
                card.childNodes[j].style.display = "none";
            }
            card.style.border = "1px solid rgb(230, 230, 230)";  
        } else {
            buttonClicked.style.setProperty("--display-check", "block");
            const label = buttonClicked.parentElement;
            const h4 = label.parentElement;
            const card = h4.parentElement;
            for(let j = 0; j < card.childNodes.length; j++) {
                if(card.childNodes[j].className === "cta")
                card.childNodes[j].style.display = "flex";
            }
            card.style.border = "3px solid hsl(176, 50%, 47%)";
        }
    });
}

function showModals() {
    const overlay = document.getElementById("overlay");
    const modals = document.getElementById("modal-selection");

    modals.style.display = "block";
    overlay.classList.add("overlay");
}

function closeModals() {
    const overlay = document.getElementById("overlay");
    const modals = document.getElementById("modal-selection");

    modals.style.display = "none";
    overlay.classList.remove("overlay");
}

function showSuccess() {
    const overlay = document.getElementById("overlay");
    const window = document.getElementById("success");
    const modals = document.getElementById("modal-selection");

    modals.style.display = "none";
    window.style.display = "block";
    overlay.classList.add("overlay");
}

function closeSuccess() {
    const overlay = document.getElementById("overlay");
    const window = document.getElementById("success");

    window.style.display = "none";
    overlay.classList.remove("overlay");
}