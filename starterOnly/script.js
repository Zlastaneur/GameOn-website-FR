// Checking if submit btn is clicked then starting the form
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    handleForm()
}) 
let first = document.getElementById("first")
console.log(first)
// Listening to the tournament radio choice
function tournamentChoice() {
    let tournamentList = document.querySelectorAll("form input[type=radio]")
    let choosenTournament = ""
    for (let i = 0; i < tournamentList.length; i++) {
        if(tournamentList[i].checked){
            choosenTournament = tournamentList[i].value
        } 
    }
    if (choosenTournament){
        return choosenTournament
    } else {
        throw new Error("Veuillez choisir un tournoi")
    }
    
}

function handleForm(){
    //Getting all the inputs
    let firstName = document.getElementById("first").value
    let lastName = document.getElementById("last").value
    let email = document.getElementById("email").value
    let birthdate = document.getElementById("birthdate").value
    let tournamentQuantity = document.getElementById("quantity").value
    let newsletter = document.getElementById("checkbox2").checked
    let termOfUse = document.getElementById("checkbox1").checked
    
    //Inputs verification
    try{
        firstNameValidation(firstName)
        lastNameValidation(lastName)
        emailValidation(email)
        birthdateValidation(birthdate)
        tournamentQuantityValidation(tournamentQuantity)
        termOfUseValidation(termOfUse)

        let city = tournamentChoice()
        showErrorMessage("")

        console.log(firstName, lastName, email, birthdate, tournamentQuantity, city, termOfUse, newsletter)
    } catch(error){ 
        showErrorMessage(error.message)
    }
    
}

function firstNameValidation(firstName){
    if (firstName.length < 2) {
        throw new Error("Le prénom est trop court. ")
    }
}

function lastNameValidation(lastName){
    if (lastName.length < 2) {
        throw new Error("Le nom est trop court. ")
    }
}

function emailValidation(email){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)){
        throw new Error("Adresse e-mail invalide")
    }
}

function birthdateValidation(birthdate){
    if (birthdate === "") {
        throw new Error("Date de naissance invalide")
    }
}
function tournamentQuantityValidation(tournamentQuantity){
    
    if (isNaN(tournamentQuantity) || tournamentQuantity < 0 || tournamentQuantity > 99){
        throw new Error ("Quantité invalide")
    }
}

function termOfUseValidation(termOfUse){

    if (termOfUse === false){
        throw new Error ("Veuillez accepter les conditions d'utilisation")
    }
}

function showErrorMessage(message){

    //let errorMessageSpan = document.getElementById("messageError")
    let formData = document.querySelector(".formData")

    if (!formData.hasAttribute("data-error-visible")){

        formData.setAttribute("data-error-visible", "true")       
        formData.setAttribute("data-error", message) 
        console.log(formData)


        
        //errorMessageSpan = document.createElement("span")
        //errorMessageSpan.id="messageError"
        
        //formData.append(errorMessageSpan)
    }
    //errorMessageSpan.innerText = message
}
/*
function showErrorMessage(message){

    let formData = document.querySelectorAll(".formData")

    for (let i = 0; i < formData.length; i++) {
        if (!formData.hasAttribute("data-error-visible")){

            formData.setAttribute("data-error-visible", "true")       
            formData.setAttribute("data-error", message) 
            console.log(formData)
        }
    }
    

}*/