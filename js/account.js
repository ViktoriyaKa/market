const passwordInput = document.getElementById('password-1')
const changeButton = document.getElementById('parol-1')

changeButton.addEventListener( 'click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
})

const passwordInput1 = document.getElementById('password-2')
const changeButton1 = document.getElementById('parol-2')

changeButton1.addEventListener ( 'click', function() {
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text'
    } else {
        passwordInput1.type = 'password'
    }
})

const passwordInput2 = document.getElementById('password-3')
const changeButton2 = document.getElementById('parol-3')

changeButton2.addEventListener( 'click', function () {
    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text'
    } else {
        passwordInput2.type = 'password'
    }
})