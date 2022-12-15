function loginUser(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var formError = document.getElementById("form-error")
   
    if(username =="" || password == ""){
        formError.innerHTML = "Alanlar Bos Olamaz"
        return
    }

    if(username =="mm@mm.mm" || password == "mmmmmm"){
        alert('Hosgeldin Mehmet')
    }
}

function singUpUser(){
    var username = document.getElementById("signUpUsername").value
    var email = document.getElementById("signUpEmail").value
    var password = document.getElementById("signUpPassword").value
    var rePassword = document.getElementById("signUpRePassword").value

    var formError = document.getElementById("form-error")
   console.log("tanimlandi")
    if(username =="" || password == ""){
        formError.innerHTML = "Alanlar Bos Olamaz"
        console.log("alanlar bos")
    }

    if(password != rePassword){
        alert('Sifreler ayni degil')
        console.log("sifre ayni degil")
    }

    var passwordLength = String(password).length
    console.log("uzunluk alindi")
    if(passwordLength < 6){
        console.log("sifre 6 dan az")
        alert('Sifre 6 karakterden az olamaz')
    }
}

function sendMailToUpdatePassword(){
    alert("Mail gonderildi, gelen kutusunu lutfen kontrol ediniz")
}

document.addEventListener("DOMContentLoaded",() =>{
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#register")
    const forgotPasswordForm = document.querySelector("#forgot")

    document.querySelector("#signUp").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden")
        createAccountForm.classList.remove("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    })

    document.querySelector("#newPassword").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.remove("form--hidden")
    })

    document.querySelector("#signIn").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.remove("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    })
    

    document.querySelector("#singUpUser").addEventListener("click", e=> {
        e.preventDefault()
        singUpUser()
    })

    document.querySelector("#backToLogin").addEventListener("click", e=> {
        e.preventDefault()
        loginForm.classList.remove("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    }) 

  
    document.querySelector("#emailToPassword").addEventListener("click", e=> {
        e.preventDefault()
        sendMailToUpdatePassword()
    })
})