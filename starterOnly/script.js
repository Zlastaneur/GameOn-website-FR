let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        handleForm()
    })

function handleForm(){

        let firstname = document.getElementById("first").value
        let lastname = document.getElementById("last").value
        let email = document.getElementById("email").value
        
        firstnameValidation(firstname)
        lastnameValidation(lastname)
        emailValidation(email)

        console.log(firstname, lastname, email)
}

function firstnameValidation(firstname){
    if (firstname.length < 2) {
        throw new Error("Le prénom est trop court. ")
    }
}

function lastnameValidation(lastname){
    if (lastname.length < 2) {
        throw new Error("Le nom est trop court. ")
    }
}

function emailValidation(email){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)){
        throw new Error("Adresse e-mail invalide")
    }
}

