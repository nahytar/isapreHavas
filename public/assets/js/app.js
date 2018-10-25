const logInPage = document.getElementById('logInPage');
const homePage = document.getElementById('homePage');
const sectionNavbar = document.getElementById('sectionNavbar');
const bono1 = document.getElementById('bono1');
const bono2 = document.getElementById('bono2');
const bono3 = document.getElementById('bono3');
const reembo1so = document.getElementById('reembo1so');

const hidePages = () => {
  document.getElementById('sectionNavbar').style.display = 'none';
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('logInPage').style.display = 'none';
  document.getElementById('bono1').style.display = 'none';
  document.getElementById('bono2').style.display = 'none';
  document.getElementById('bono3').style.display = 'none';
  document.getElementById('reembo1so').style.display = 'none';
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
const showBonosUno = () => {
  hidePages();
  sectionNavbar.style.display = 'block';
  bono1.style.display = 'block';
}
const showBonosDos = () => {
  hidePages();
  sectionNavbar.style.display = 'block';
  bono2.style.display = 'block';
}
const showBonosTres = () => {
  hidePages();
  sectionNavbar.style.display = 'block';
  bono3.style.display = 'block';
}

const showReembolso = () => {
  hidePages();
  sectionNavbar.style.display = 'block';
  reembo1so.style.display = 'block';
}