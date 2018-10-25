const logInPage = document.getElementById('logInPage');
const homePage = document.getElementById('homePage');
const sectionNavbar = document.getElementById('sectionNavbar');
const areaBonoUno = document.getElementById('areaBonoUno');

const hidePages = () => {
  document.getElementById('sectionNavbar').style.display = 'none';
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('logInPage').style.display = 'none';
  document.getElementById('areaBonoUno').style.display = 'none';
}

window.onload = function(){
  hidePages();
  document.getElementById('logInPage').style.display = 'block';
  
}


const showlogInPage = () => {
  hidePages();
  homePage.style.display = 'block';
  sectionNavbar.style.display ='block'
}



const showNavbar = () => {
  hideAll();
  document.getElementById("sectionNavbar").style.display = "block";
  logInPage.style.display = 'none';
}

const showHomePage = () => {
  hidePages();
  sectionNavbar.style.display = 'block';
  homePage.style.display = 'block';
  logInPage.style.display = 'none';
}
const showBonos = () => {
  hidePages();
  sectionNavbar.style.display = 'block';
  homePage.style.display = 'none';
  logInPage.style.display = 'none';
  areaBonoUno.style.display = 'block';
}