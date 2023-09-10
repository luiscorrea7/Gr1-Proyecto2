import { changeLang } from "./language.js";
// Idioma predeterminado 
document.documentElement.setAttribute("lang", "en")

const argFlag = document.getElementById('argFlag');
argFlag.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem("lang", "es")
})

const usaFlag = document.getElementById('usaFlag');
usaFlag.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem("lang", "en")
})

if (localStorage.getItem("lang") === 'en') {
  changeLang('en')
} else {
  changeLang('es')
}

const imgNav = document.getElementById('navbarImg');

document.addEventListener('scroll', () => {
  imgNav.classList.add('imgMini')
})
document.addEventListener('scrollend', () => {
    imgNav.classList.remove('imgMini');
})