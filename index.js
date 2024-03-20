//Create the const variables for each of the elements within the form container that will be interacted with.
const userEmailInput = document.getElementById("userEmail") 


function showValidation(elem, msg) {
    const inputErrorMsg = elem.parentNode.querySelector(".inputError")
    inputErrorMsg.innerText = msg
}

const inputElements = document.querySelectorAll("input");
for (let i = 0; i < inputElements.length; i++) {
    const input = inputElements[i];
    const inputErrorStyle = document.querySelectorAll("input")

    // List of messages to appear with their appropriate input fields
    const msg = ["First Name cannot be empty", "Last Name cannot be empty", "Looks like this is not an email", "Password cannot be empty"]

    const addErrorContainer = document.querySelectorAll(".inputContainer")
    const errorIcon = document.createElement("img")
    errorIcon.src = "./imgs/icon-error.svg"
    errorIcon.className = "errorIcon"
    errorIcon.alt = "Error Icon"


    // Validate on blur, or validate when user clicks away from element
    input.addEventListener("blur", function(e) {
        e.target.checkValidity();
    })

    // Show validation message and update visuals to alert user
    input.addEventListener("invalid", function(e) {
        showValidation(e.target, msg[i])
        inputErrorStyle[i].style.borderColor = "hsl(0, 100%, 74%)"
        inputErrorStyle[i].style.color = "hsl(0, 100%, 74%)"

        addErrorContainer[i].append(errorIcon)
        
    })

    // Hide validation message and reset visuals to original state
    input.addEventListener("input", function(e) {
        if (e.target.validity.valid) {
            showValidation(e.target, "")
            inputErrorStyle[i].style.borderColor = "hsl(0, 0%, 87%)"
            inputErrorStyle[i].style.color = ""
            
            errorIcon.remove();

        }
    })
}
