// Checking if submit btn is clicked then starting the form
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    handleForm()
}) 

// Listening to the tournament radio choice
 
let tournamentList = document.querySelectorAll("form input[type=radio]")
for (let i = 0; i < tournamentList.length; i++) {
    tournamentList[i].addEventListener("change", () => {
        let choosenTournament = tournamentList[i].value
    })
}

function handleForm(choosenTournament){
    //Getting all the inputs
    let firstname = document.getElementById("first").value
    let lastname = document.getElementById("last").value
    let email = document.getElementById("email").value
    let birthdate = document.getElementById("birthdate").value
    let tournamentQuantity = document.getElementById("quantity").value
    let newsletter = document.getElementById("checkbox2").checked


    firstnameValidation(firstname)
    lastnameValidation(lastname)
    emailValidation(email)
    birthdateValidation(birthdate)
    tournamentQuantityValidation(tournamentQuantity)
    tournamentChoice(choosenTournament)
    tournamentChoiceValidation(choosenTournament)
    termOfUse()

    console.log(firstname, lastname, email, birthdate, tournamentQuantity, choosenTournament, newsletter)

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

function birthdateValidation(birthdate){
    if (birthdate === "") {
        throw new Error("Date de naissance invalide")
    }
}

function tournamentQuantityValidation(tournamentQuantity){
    
    if (isNaN(tournamentQuantity)){
        throw new Error ("Quantité invalide")
    }
}

/*
function tournamentChoice(choosenTournament){
    let tournamentList = document.querySelectorAll("form input[type=radio]")
    console.log(tournamentList)
    for (let i = 0; i < tournamentList.length; i++) {
        choosenTournament = tournamentList[i].value
        console.log(choosenTournament)
    }
}*/

function tournamentChoiceValidation(choosenTournament){
    if (choosenTournament === ""){
        console.log(choosenTournament)
        throw new Error ("Veuillez choisir un tournoi")
    }
}

function termOfUse(){
    let checkbox = document.getElementById("checkbox1").checked

    if (checkbox === false){
        throw new Error ("Veuillez accepter les conditions d'utilisation")
    }
}