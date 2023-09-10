const alertas = {
  loginSuccess: function () {
    Swal.fire({
      title: 'Bienvenido!',
      text: "Tu ingreso fue exitoso",
      icon: 'success',
      confirmButtonColor: 'green',
      confirmButtonText: 'Continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    })
  },
  badLogin: function () {
    Swal.fire({
      title: 'Reintentalo',
      text: "Este usuario no existe",
      icon: 'error',
      confirmButtonColor: 'red',
      confirmButtonText: 'Reintentar'
  })
  },
  badPassword: function () {
    Swal.fire({
      title: 'Contraseña o Email incorrectos',
      text: "Vuelva a introducir sus datos",
      icon: 'warning',
      confirmButtonColor: 'orange',
      confirmButtonText: 'Reintentar'
  })
  }
}

export default alertas;