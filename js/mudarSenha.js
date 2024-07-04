document.addEventListener("DOMContentLoaded", function () {
  const emailPasswordChange = document.querySelector("#email")

  let emailPasswordChangeUpdate = ""

  const storedEmail = localStorage.getItem("emailRegistration")

  emailPasswordChange.addEventListener("input", function (event) {
    emailPasswordChangeUpdate = event.target.value
  })

  document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "index.html"
  })

  document.getElementById("enviar").addEventListener("click", function () {
    if (emailPasswordChangeUpdate === storedEmail) {
      alert(
        "Te enviamos um link para que você possa mudar sua senha.    ~ps: Confia👍"
      )
    } else{
      alert('Não localizamos esse email no nosso banco de dados')
    } 
  })
})
