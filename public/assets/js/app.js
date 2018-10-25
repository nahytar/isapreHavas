

const hideAll = () => {
  document.getElementById('sectionNavbar').style.display = 'none';
  document.getElementById('areaPricipal').style.display = 'none';
}

const showNavbar = () => {
  hideAll();
  document.getElementById("sectionNavbar").style.display = "block";
}
const showPrincipal= () => {
  hideAll();
  document.getElementById("areaPricipal").style.display = "block";
}