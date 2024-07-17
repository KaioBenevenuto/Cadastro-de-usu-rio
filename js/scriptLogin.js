document.addEventListener("DOMContentLoaded", function () {
  const emailLogin = document.querySelector("#email")
  const senhaLogin = document.querySelector("#senha")

  let emailLoginUpdate = ""
  let senhaLoginUpdate = ""

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
    fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailLoginUpdate,
        password: senhaLoginUpdate,
      }),
    }).then((response) => {
      if (response.ok) {
        document.getElementById("container").style.display = "none"
        document.getElementById("loading").style.display = "flex"

        setTimeout(() => {
          window.location.href = "https://kaiobenevenuto.github.io/Calculadora/"
        }, 5000)
      } else {
        alert("O email ou a senha está incorreta.")
      }
    })
  })
})