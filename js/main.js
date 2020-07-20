// Hamburger menu
menu = document.getElementsByClassName("-menu")[0];
hamburger = menu.getElementsByTagName("i")[0];
menu.onclick = () => {
  document.getElementsByClassName("-div-nav")[0].classList.toggle("-active");
  hamburger.classList.toggle("fa-times");
};

// Plant filter
smallPlants = document.getElementsByClassName("-filter-1");
mediumPlants = document.getElementsByClassName("-filter-2");
largePlants = document.getElementsByClassName("-filter-3");

for (let i = 0; i < mediumPlants.length; i++) {
  mediumPlants[i].style.display = "none";
}

for (let i = 0; i < largePlants.length; i++) {
  largePlants[i].style.display = "none";
}

filterButtons = document.getElementsByClassName("-filter-button");

buttonSmall = document.getElementsByClassName("-filter-button-1")[0];
buttonMedium = document.getElementsByClassName("-filter-button-2")[0];
buttonLarge = document.getElementsByClassName("-filter-button-3")[0];

buttonMedium.onclick = (e) => {
  e.preventDefault();
  if (!buttonMedium.classList.contains("-button-primary")) {
    makePrimary(buttonMedium);
    displayPlants(2);
  }
};

buttonSmall.onclick = (e) => {
  e.preventDefault();
  if (!buttonSmall.classList.contains("-button-primary")) {
    makePrimary(buttonSmall);
    displayPlants(1);
  }
};

buttonLarge.onclick = (e) => {
  e.preventDefault();
  if (!buttonLarge.classList.contains("-button-primary")) {
    makePrimary(buttonLarge);
    displayPlants(3);
  }
};

function makePrimary(button) {
  button.classList.toggle("-button-primary");
  button.classList.toggle("-button-secondary");
  for (let i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i] != button) {
      filterButtons[i].classList.remove("-button-primary");
      filterButtons[i].classList.add("-button-secondary");
    }
  }
}

function displayPlants(n) {
  switch (n) {
    case 2:
      showMediumPlants();
      hideSmallPlants();
      hideLargePlants();
      break;
    case 1:
      showSmallPlants();
      hideMediumPlants();
      hideLargePlants();
      break;
    case 3:
      showLargePlants();
      hideMediumPlants();
      hideSmallPlants();
      break;
    default:
      break;
  }
}

function hideMediumPlants() {
  for (let i = 0; i < mediumPlants.length; i++) {
    mediumPlants[i].style.display = "none";
  }
}

function showMediumPlants() {
  for (let i = 0; i < mediumPlants.length; i++) {
    mediumPlants[i].style.display = "block";
  }
}

function hideSmallPlants() {
  for (let i = 0; i < mediumPlants.length; i++) {
    smallPlants[i].style.display = "none";
  }
}

function showSmallPlants() {
  for (let i = 0; i < smallPlants.length; i++) {
    smallPlants[i].style.display = "block";
  }
}

function hideLargePlants() {
  for (let i = 0; i < largePlants.length; i++) {
    largePlants[i].style.display = "none";
  }
}

function showLargePlants() {
  for (let i = 0; i < largePlants.length; i++) {
    largePlants[i].style.display = "block";
  }
}

// Landing

carouselNumber = document.getElementsByClassName("-carousel-number")[0];
largeNumber = document.getElementsByClassName("-large-number")[0];
leftArrow = document.getElementsByClassName("fa-chevron-left")[0];
rightArrow = document.getElementsByClassName("fa-chevron-right")[0];
bg = document.getElementsByClassName("-bg")[0];
totalImages = 4;
imageCounter = 0;
setUp();

leftArrow.onclick = () => {
  imageCounter = (imageCounter + totalImages - 1) % totalImages;
  setUp();
};

rightArrow.onclick = () => {
  imageCounter = (imageCounter + 1) % totalImages;
  setUp();
};

function setNumbers() {
  largeNumber.innerHTML = imageCounter + 1;
  carouselNumber.innerHTML = "00" + (imageCounter + 1);
}

function setBg(n) {
  bg.style.display = "none";

  setTimeout(function () {
    bg.style.backgroundImage = "url('res/img/bg" + n + ".jpg')";
    bg.style.animation = "bg-animation 0.5s ease forwards";
    bg.style.display = "block";
  }, 0);
}

function setUp() {
  setNumbers();
  setBg(imageCounter + 1);
  // setTimeout(function () {
  //   bg.style.animation = "none";
  // }, 1000);
}
