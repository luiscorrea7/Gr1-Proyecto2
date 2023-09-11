import { logOut } from "../login.js"

const adminToggler = document.getElementById('adminBtn');
const loginBtn = document.getElementById('loginBtn');
const logOutBtn = document.getElementById('logoutBtn');
logOutBtn.addEventListener('click', logOut, false)

if (!localStorage.getItem('adminLog')) {
  adminToggler.classList.add('d-none');
  logOutBtn.classList.add('d-none');
} else {
  loginBtn.classList.add('d-none')
}