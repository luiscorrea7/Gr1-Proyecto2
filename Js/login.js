const formLogin = document.getElementById('form1')
console.log(formLogin);

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
 console.table(finalData)
 // Validacion
 if (userData.email === finalData.email && userData.password === finalData.password) {
  alert('hola')
  window.location.reload();
 }

 if (userData.email !== finalData.email) {
  alert('este usuario no existe')
 }

 if (userData.email === finalData.email && userData.password !== finalData.password) {
  alert('su contraseña esta mal')
 }
}

formLogin.addEventListener('submit', login, false)