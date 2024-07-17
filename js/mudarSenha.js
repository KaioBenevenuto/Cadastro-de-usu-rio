document.addEventListener("DOMContentLoaded", function () {
  const emailPasswordChange = document.querySelector("#email")

  let emailPasswordChangeUpdate = ""

  emailPasswordChange.addEventListener("input", function (event) {
    emailPasswordChangeUpdate = event.target.value
  })

  document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "index.html"
  })

  document.getElementById("enviar").addEventListener("click", function () {
    fetch(`http://localhost:8080/api/users/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailPasswordChangeUpdate,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Email não encontrado")
        }
      })
      .then((data) => {
        if (data.exists) {
          alert(
            "Te enviamos um link para que você possa mudar sua senha. ~ps: Confia👍"
          )
          window.location.href = "index.html"
        }
      })
      .catch((error) => {
        alert("Não localizamos esse email no nosso banco de dados")
      })
  })
})
