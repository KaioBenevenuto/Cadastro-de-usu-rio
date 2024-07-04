document.addEventListener("DOMContentLoaded", function () {
  const emailLogin = document.querySelector("#email")
  const senhaLogin = document.querySelector("#senha")

  let emailLoginUpdate = ""
  let senhaLoginUpdate = ""

  const storedEmail = localStorage.getItem("emailRegistration")
  const storedSenha = localStorage.getItem("senhaRegistration")

  emailLogin.addEventListener("input", function (event) {
    emailLoginUpdate = event.target.value
  })

  senhaLogin.addEventListener("input", function (event) {
    senhaLoginUpdate = event.target.value
  })

  document.getElementById("cadastrar").addEventListener("click", function () {
    window.location.href = "cadastro.html"
  })

  document.getElementById("login").addEventListener("click", function () {
    if (storedEmail === emailLoginUpdate && storedSenha === senhaLoginUpdate) {
      document.getElementById('container').style.display = 'none';
      document.getElementById("loading").style.display = "flex"

      setTimeout(() => {
        window.location.href = "https://kaiobenevenuto.github.io/Calculadora/"
      }, 5000)
    } else{
      alert("O email ou a senha está incorreta.")
    }
  })
})
