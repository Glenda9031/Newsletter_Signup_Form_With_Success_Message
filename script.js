const containerEl = document.getElementById('container')
const leftEl = document.getElementById('left')
const rightEl = document.getElementById('right')
const userEmailEl = document.getElementById('user-email')
const invalidEmailEl = document.getElementById('invalid-email')
const emailInput = document.getElementById('email')
const submitBtnEl = document.getElementById('submit-btn')
const confirmedMessageEl = document.getElementById('confirmed-message')
const dismissMessageEl = document.getElementById('dismiss-message')

function formSuccess() {
    confirmedMessageEl.classList.add('confimed-message')
    containerEl.classList.add('container')
    leftEl.style.display = 'none'
    rightEl.style.display = 'none'
}

function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
}

submitBtnEl.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailInput.ariaValueMax.trim()

    if (validateEmail(email)) {
        formSuccess()
        userEmailEl.value = ''

        invalidEmailEl.classList.remove('active')
        emailInput.classList.remove('active')
    } else {
        invalidEmailEl.classList.add('active')
        emailInput.classList.add('active')
    }
})

dismissMessageEl.addEventListener('click', () => {
    leftEl.style.display = 'block'
    rightEl.style.display = 'block'
    containerEl.classList.remove('success')
    confirmedMessageEl.classList.remove('active')
})

