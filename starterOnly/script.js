//Getting all the inputs
const formData = document.querySelectorAll(".formData");
const modalBody = document.querySelector(".modal-body")
const form = document.querySelector("form")
const submitBtn = document.querySelector(".btn-submit")
let firstName = document.getElementById("first")
let lastName = document.getElementById("last")
let email = document.getElementById("email")
let birthdate = document.getElementById("birthdate")
let tournamentQuantity = document.getElementById("quantity")
let citySelection = document.getElementById("location1")
let termOfUse = document.getElementById("checkbox1")
let newsletter = document.getElementById("checkbox2").checked

// Checking if submit btn is clicked
submitBtn.addEventListener("click", validate)

// Validate or not the form
function validate(e){
    e.preventDefault()
    
    if (firstNameValidation() && lastNameValidation() && emailValidation() && birthdateValidation() && tournamentQuantityValidation() && termOfUseValidation() && cityChoice()){
        form.style.display = "none"
        closeBtn.classList.add("end")

        modalBody.insertAdjacentHTML("afterbegin",
        `
            <div class="thanksModal">
                <div class="message">
                    Merci pour<br>votre inscription ! 
                </div>
                <input class="button end" type="button" value="Fermer"/>
            </div>
        `)

        let endBtn = document.querySelectorAll(".end")

        endBtn.forEach((btn)=> btn.addEventListener("click", (closeModal)))
        endBtn.forEach((btn)=> btn.addEventListener("click", (resetForm)))

    } else {
        firstNameValidation(),
        lastNameValidation(),
        emailValidation(),
        birthdateValidation(),
        tournamentQuantityValidation(),
        termOfUseValidation(),
        cityChoice()
    }
}

/******* ↓↓ Listen and check the inputs ↓↓ *******/
formData[0].addEventListener("input", firstNameValidation)
function firstNameValidation(){
    if (firstName.value.length >= 2) {
        cleanError(firstName)
        return true
    } else {
        showError(firstName)
        return false
    }
}

formData[1].addEventListener("input", lastNameValidation)
function lastNameValidation(){
    if (lastName.value.length >= 2) {
        cleanError(lastName)
        return true
    } else {
        showError(lastName)
        return false
    }
}

formData[2].addEventListener("input", emailValidation)
function emailValidation(){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    if (emailRegExp.test(email.value)){
        cleanError(email)
        return true
    } else {
        showError(email)
        return false
    }
}

formData[3].addEventListener("input", birthdateValidation)
function birthdateValidation(){
    if (birthdate.value != "") {
        cleanError(birthdate)
        return true
    } else {
        showError(birthdate)
        return false
    }
}

formData[4].addEventListener("input", tournamentQuantityValidation)
function tournamentQuantityValidation(){
    if (tournamentQuantity.value != "" && tournamentQuantity.value >= 0 && tournamentQuantity.value < 99){
        cleanError(tournamentQuantity)
        return true
    } else {
        showError(tournamentQuantity)
        return false
    }
}

formData[5].addEventListener("input", cityChoice)
function cityChoice() {
    let checkedCity = document.querySelector("input[name='location']:checked")
    if (checkedCity){
        cleanError(citySelection)
        return true
    } else {
        showError(citySelection)
        return false
    }
}

formData[6].addEventListener("input", termOfUseValidation)
function termOfUseValidation(){

    if (termOfUse.checked === true){
        cleanError(termOfUse)
        return true
    } else {
        showError(termOfUse)
        return false
    }
}
/*********** ↑↑ Listen and check the inputs ↑↑ ***********/

// Get position of the error and displays it
function showError(element){
    let parentFormData = element.parentElement
    let errorMessage = ""

    switch (element.id) {
        case "first": { errorMessage = "Le prénom doit contenir au moins 2 caractères"
        break } 
        case "last": { errorMessage = "Le nom doit contenir au moins 2 caractères"
        break }
        case "email" :  { errorMessage = "Merci d'insérer un email valide"
        break }
        case "birthdate" :  { errorMessage = "Veuillez sélectionner votre date de naissance"
        break }
        case "quantity":  { errorMessage = "Quantité invalide"
        break }
        case "location1":  { errorMessage = "Vous devez choisir une option"
        break }
        case "checkbox1":  { errorMessage = "Merci d'accepter les conditions d'utilisations"
        break 
        }
        default : { console.log("Erreur dans l'instruction switch")
        }
    }
    parentFormData.setAttribute("data-error-visible", "true")
    parentFormData.setAttribute("data-error", errorMessage) 
}

// Clean error when there is no more
function cleanError(e){
    let parentFormData = e.parentElement

    parentFormData.setAttribute("data-error-visible", "false")
    parentFormData.setAttribute("data-error", "") 
}

// Reset form at the end
function resetForm(){
    let thanksModal = document.querySelector(".thanksModal")

    closeBtn.classList.remove("end")
    thanksModal.remove()
    form.reset()
    form.style.display = "block"
}