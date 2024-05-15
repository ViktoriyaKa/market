// document.querySelector('.tovar1-btn-img1').addEventListener('click', function() {
//     document.querySelector('.tovar1').style.display = 'none';
// });

// document.querySelector('.tovar2-btn-img1').addEventListener('click', function() {
//     document.querySelector('.tovar2').style.display = 'none';
// });

// document.querySelector('.knopka2').addEventListener('click', function() {
//     document.querySelector('.tovar1').style.display = 'none';
//     document.querySelector('.tovar2').style.display = 'none';
// });

// document.querySelector('.knopka1').addEventListener('click', function() {
//     window.location.href = 'index-head.html';
//   });


const input = document.querySelector('.cart-right-22-input');
const button = document.querySelector('.cart-right-22-btn1');
const promokod = document.querySelector('.promokod')
const cart_right = document.querySelector('.cart-right-2')

button.addEventListener( 'click', function() {
    if (input.value.length > 0) {
        promokod.style.display = 'block'
        cart_right.style.height = '250px'
    } else {
        promokod.style.display = 'none'
        cart_right.style.height = '230px'
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
