// getting all the elements
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const submitBtn = document.getElementById("submit-btn")
const closeEye1 = document.getElementById("close-eye1")
const openEye1 = document.getElementById("open-eye1")
const closeEye2 = document.getElementById("close-eye2")
const openEye2 = document.getElementById("open-eye2")

// console.log(username, email, password, password2, submitBtn)

// checking input
function checkInput(inputArr) {
    inputArr.forEach((input) => {
        if (input.value === "") {
            showError(input, `${input.id} must be entered`)
            return
        }
        else {
            showSuccess(input)
            checkLength(username, 3, 15)
            checkLength(password, 6, 25)
            checkEmail(email)
            checkPassword(password, password2)
        }
    })
}

// error function
function showError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = message
    formControl.classList.remove("success")
    formControl.classList.add("error")
}

// success function
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.classList.remove("error")
    formControl.classList.add("success")
}

// function to check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} must be of minimum length ${min}`)
    }
    else if (input.value.length > max) {
        showError(input, `${input.id} can not be more than ${min} characters`)
    }
    else {
        showSuccess(input)
    }
}

// check email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input, `${input.id} is not valid`)
    }
}

// checking password
function checkPassword(input1, input2) {
    if (input1.value === input2.value && input1.value !== "" && input2.value !== "" && input1.value.length >= 6) {
        showSuccess(input2)
    }
    else if (input1.value.length < 6) {
        showError(input2, `please correct the above input value`)
    }
    else {
        showError(input2, `you must enter the same password`)
    }
}

// event listeners
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    checkInput([username, email, password, password2])
})


closeEye1.addEventListener("click", () => {
    password.type = "text"
    closeEye1.style.visibility = "hidden"
    openEye1.style.visibility = "visible"
})

openEye1.addEventListener("click", () => {
    password.type = "password"
    closeEye1.style.visibility = "visible"
    openEye1.style.visibility = "hidden"
})

closeEye2.addEventListener("click", () => {
    password2.type = "text"
    closeEye2.style.visibility = "hidden"
    openEye2.style.visibility = "visible"
})

openEye2.addEventListener("click", () => {
    password2.type = "password"
    closeEye2.style.visibility = "visible"
    openEye2.style.visibility = "hidden"
})
