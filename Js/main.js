import { changeLang } from "./language.js";

// Idioma predeterminado 


const argFlag = document.getElementById('argFlag');
argFlag.addEventListener('click', () => {
  localStorage.removeItem('lang');
  localStorage.setItem("lang", "es");
  document.documentElement.setAttribute("lang", "es");
})

const usaFlag = document.getElementById('usaFlag');
usaFlag.addEventListener('click', () => {
  localStorage.removeItem('lang')
  localStorage.setItem("lang", "en");
  document.documentElement.setAttribute("lang", "en")
})

if (localStorage.getItem("lang") === 'en') {
  changeLang('en');
  document.documentElement.setAttribute("lang", "en")
} else {
  changeLang('es');
  document.documentElement.setAttribute("lang", "es");
}

const imgNav = document.getElementById('navbarImg');

document.addEventListener('scroll', () => {
  imgNav.classList.add('imgMini')
})
document.addEventListener('scrollend', () => {
    imgNav.classList.remove('imgMini');
})