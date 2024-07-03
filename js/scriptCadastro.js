document.addEventListener("DOMContentLoaded", function () {
  const emailRegistration = document.querySelector("#emailRegistration")
  const senhaRegistration = document.querySelector("#senhaRegistration")
  const senhaConfirmRegistration = document.querySelector(
    "#senhaConfirmRegistration"
  )

  let emailRegistrationUpdate = ""
  let senhaRegistrationUpdate = ""
  let senhaConfirmRegistrationUpdate = ""

  emailRegistration.addEventListener("input", function (event) {
    emailRegistrationUpdate = event.target.value
  })

  senhaRegistration.addEventListener("input", function (event) {
    senhaRegistrationUpdate = event.target.value
  })

  senhaConfirmRegistration.addEventListener("input", function (event) {
    senhaConfirmRegistrationUpdate = event.target.value
  })

  class Cadastro {
    constructor(
      emailRegistration,
      senhaRegistration,
      senhaConfirmRegistration
    ) {
      this.emailRegistration = emailRegistration
      this.senhaRegistration = senhaRegistration
      this.senhaConfirmRegistration = senhaConfirmRegistration
    }

    confirmSenha() {
      if (this.senhaRegistration === this.senhaConfirmRegistration) {
        if (this.senhaRegistration.length >= 10){
          console.log("entrou no confirmSenha()")
          return true
        }
        document.getElementById("messagePassword").innerHTML = '*A senha precisa ter no mínimo 10 caracteres/digitos'
        console.log("não chegou no final confirmSenha()")
        return false
      }
      console.log("não entrou no confirmSenha()")
      alert('As senhas não condizem')
      return false
    }

    confirmEmail() {
      if (this.emailRegistration.includes('@')) {
        console.log("entrou no confirmEmail()")
        return true
      } else {
        console.log("não entrou no confirmEmail()")
        document.getElementById("messageEmail").innerHTML = '*O email precisa ter o "@"'
        return false
      }
    }
  }

  document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "login.html"
  })

  document.getElementById("cadastrar").addEventListener("click", function () {
    const registro = new Cadastro(
      emailRegistrationUpdate,
      senhaRegistrationUpdate,
      senhaConfirmRegistrationUpdate
    )

    document.getElementById("messageEmail").innerHTML = ""
    document.getElementById("messagePassword").innerHTML = ""
    if (registro.confirmSenha() && registro.confirmEmail()) {
      window.location.href = "login.html"
    }
  })
})
