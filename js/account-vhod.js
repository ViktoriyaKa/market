const passwordInput = document.getElementById('password')
const changeButton = document.getElementById('parol')

changeButton.addEventListener( 'click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
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