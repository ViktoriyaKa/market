const passwordInput1 = document.getElementById('password-1')
const changeButton1 = document.getElementById('parol-1')
const passwordInput2 = document.getElementById('password-2')
const changeButton2 = document.getElementById('parol-2')

changeButton1.addEventListener( 'click', function() {
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text'
    } else {
        passwordInput1.type = 'password'
    }
})

changeButton2.addEventListener( 'click', function() {
    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text'
    } else {
        passwordInput2.type = 'password'
    }
})

document.querySelector('.header-line3-new').addEventListener('click', function() {
    var category = document.querySelector('.category');
    if (category.style.display === 'none' || category.style.display === '') {
        category.style.display = 'block';
    } else {
        category.style.display = 'none';
    }
});