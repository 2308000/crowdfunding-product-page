// OPENING AND CLOSING MENU ON MOBILE DEVICES

const showMenu = () => {
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
};
const closeMenu = () => {
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
};

// PROGRESS BAR
const convertStringToFloat = (amount) => {
  const cutTo = amount.indexOf(",");
  const stringAmount = `${amount.substring(0, cutTo)} ${amount.substring(
    cutTo + 1,
    amount.length
  )}`;
  const toConvert = stringAmount.replace(" ", "");
  return parseFloat(toConvert);
};

const progressBar = document.getElementById("progress-bar");
const computedStyle = getComputedStyle(progressBar);
const collected = convertStringToFloat(
  document.getElementById("collected").textContent
);
const needed = convertStringToFloat(
  document.getElementById("needed").textContent
);
progressBar.style.setProperty("--width", collected / needed);

//RADIO BUTTON TOGGLE
const buttons = [...document.getElementsByClassName("radio-button")];
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonClicked = e.target;
    const currentValueOfDisplay = getComputedStyle(buttonClicked);
    if (currentValueOfDisplay.getPropertyValue("--display-check") == "block") {
      buttonClicked.style.setProperty("--display-check", "none");
      const card = buttonClicked.parentElement.parentElement.parentElement;
      const children = [...card.childNodes];
      console.log(children);
      children.forEach((child) => {
        if (child.className === "cta") child.style.display = "none";
      });
      card.style.border = "1px solid rgb(230, 230, 230)";
    } else {
      buttonClicked.style.setProperty("--display-check", "block");
      const card = buttonClicked.parentElement.parentElement.parentElement;
      const children = [...card.childNodes];
      console.log(children);
      children.forEach((child) => {
        if (child.className === "cta") child.style.display = "flex";
      });
      card.style.border = "3px solid hsl(176, 50%, 47%)";
    }
  });
});

const showModals = () => {
  const overlay = document.getElementById("overlay");
  const modals = document.getElementById("modal-selection");

  modals.style.display = "block";
  overlay.classList.add("overlay");
};

const closeModals = () => {
  const overlay = document.getElementById("overlay");
  const modals = document.getElementById("modal-selection");

  modals.style.display = "none";
  overlay.classList.remove("overlay");
};

const showSuccess = () => {
  const overlay = document.getElementById("overlay");
  const window = document.getElementById("success");
  const modals = document.getElementById("modal-selection");

  modals.style.display = "none";
  window.style.display = "block";
  overlay.classList.add("overlay");
};

const closeSuccess = () => {
  const overlay = document.getElementById("overlay");
  const window = document.getElementById("success");

  window.style.display = "none";
  overlay.classList.remove("overlay");
};
