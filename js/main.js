menu = document.getElementsByClassName("-menu")[0];
hamburger = menu.getElementsByTagName("i")[0];
menu.onclick = () => {
  document.getElementsByClassName("-div-nav")[0].classList.toggle("-active");
  hamburger.classList.toggle("fa-times");
};
