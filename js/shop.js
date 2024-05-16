const button = document.querySelector('.buttons-btn1')
const image = document.querySelector('.buttons-img1')

button.addEventListener('mouseenter', function() {
    image.src = '/фото/arrwhiteleft.png'
    image.style.backgroundColor = '#2DB224'
    button.style.backgroundColor = '#2DB224'
})

button.addEventListener('mouseleave', function() {
    image.src = "/фото/arrgreenleft.png"
    image.style.backgroundColor = '#fff'
    button.style.backgroundColor = '#fff'
})
  
const button1 = document.querySelector('.buttons-btn3')
const image1 = document.querySelector('.buttons-img2')

button1.addEventListener('mouseenter', function() {
    image1.src = "/фото/arrwhiterightpng.png"
    image1.style.backgroundColor = '#2DB224'
    button1.style.backgroundColor = '#2DB224'
})

button1.addEventListener('mouseleave', function() {
    image1.src = "/фото/arrgreenright.png"
    image1.style.backgroundColor = '#fff'
    button1.style.backgroundColor = '#fff'
})
    
document.querySelector('.header-line3-new').addEventListener('click', function() {
    var category = document.querySelector('.category');
    if (category.style.display === 'none' || category.style.display === '') {
        category.style.display = 'block';
    } else {
        category.style.display = 'none';
    }
})

const cartBtns = document.querySelectorAll('.cart-btn');
const minusBtns = document.querySelectorAll('.minus-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const quantityValues = document.querySelectorAll('.quantity');

cartBtns.forEach((cartBtn, index) => {
    const quantity1 = cartBtn.closest('.tovar').querySelector('.quantity1');
    const cart = cartBtn.closest('.cart');
    let count = 1;

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'none';
        quantityValues[index].innerText = count;
        quantity1.style.display = 'flex';
    });

    plusBtns[index].addEventListener('click', () => {
        count++;
        quantityValues[index].innerText = count;
    });

    minusBtns[index].addEventListener('click', () => {
        if (count > 1) {
            count--;
            quantityValues[index].innerText = count;
        } else {
            cart.style.display = 'flex';
            quantity1.style.display = 'none';
        }
    });
});


var heartBtns = document.querySelectorAll('.heart-btn1');


heartBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var heartIcon = btn.querySelector('.heart-icon');
        var imgSrc = heartIcon.getAttribute('src');
        if(imgSrc === '/фото/Heart1.svg') {
            heartIcon.setAttribute('src', '/фото/icons8-сердце-30.png' );
        } else {
            heartIcon.setAttribute('src', '/фото/Heart1.svg');
        }
    });
});