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

