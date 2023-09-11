import alertas from "./components/sweetalert2.js";

const formLogin = document.getElementById('form1')

const getUserData = async () => {
  try {
    const resp = await fetch(' http://localhost:3000/adminUser')
    const user = await resp.json();
    return user
  } catch (error) {
    console.log(error)
  }
}

const login = async (e) => {
 e.preventDefault();
 // Datos
 const userData = await getUserData();
 const dataFormulario = new FormData(e.target);
 const finalData = Object.fromEntries(dataFormulario.entries());
 // Validacion
 if (userData.email === finalData.email && userData.password === finalData.password) {
  alertas.loginSuccess();
 }

 if (userData.email !== finalData.email) {
  alertas.badLogin();
 }

 if (userData.email === finalData.email && userData.password !== finalData.password) {
  alertas.badPassword();
 }
 localStorage.setItem("adminLog", "True");
}

formLogin.addEventListener('submit', login, false)

export const logOut = () => {
  localStorage.removeItem('adminLog');
  window.location.reload()
}