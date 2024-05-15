const tovaraNet = document.querySelector('.tovara-net')
document.querySelectorAll('.tovar1-btn-img1').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.parentElement.style.display = 'none';
    let allHidden = true;
    document.querySelectorAll('.tovar1-btn-img1').forEach(function(btn) {
      if (btn.parentElement.style.display !== 'none') {
        allHidden = false;
      }
    });
    if (allHidden) {
      tovaraNet.style.display = 'block';
    }
  });
});

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
