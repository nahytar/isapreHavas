const logInPage = document.getElementById('logInPage');
const homePage = document.getElementById('homePage');
const sectionNavbar = document.getElementById('sectionNavbar');

const hidePages = () => {
  document.getElementById('sectionNavbar').style.display = 'none';
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('logInPage').style.display = 'none';
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