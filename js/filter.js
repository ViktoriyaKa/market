const radioButtons = document.querySelectorAll('input[name="cat"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    if (radioButton.id === '1') {
      document.querySelector('.left-filter-electronika').style.display = 'block';
    } else {
      document.querySelector('.left-filter-electronika').style.display = 'none';
    }
  });
});


const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".prices input"),
range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

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


document.querySelectorAll('.heart-btn1').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var img = this.querySelector('.heart-icon');
        var imgSrc = img.getAttribute('src');
        if(imgSrc === "/фото/Heart1.svg") {
            img.setAttribute('src', '/фото/icons8-сердце-30.png');
        } else {
            img.setAttribute('src', "/фото/Heart1.svg");
        }
    });
});

document.querySelector('.header-line3-new').addEventListener('click', function() {
    var category = document.querySelector('.category');
    if (category.style.display === 'none' || category.style.display === '') {
        category.style.display = 'block';
    } else {
        category.style.display = 'none';
    }
});