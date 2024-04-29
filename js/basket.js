document.querySelector('.tovar1-btn-img1').addEventListener('click', function() {
    document.querySelector('.tovar1').style.display = 'none';
});

document.querySelector('.tovar2-btn-img1').addEventListener('click', function() {
    document.querySelector('.tovar2').style.display = 'none';
});

document.querySelector('.knopka2').addEventListener('click', function() {
    document.querySelector('.tovar1').style.display = 'none';
    document.querySelector('.tovar2').style.display = 'none';
});

document.querySelector('.knopka1').addEventListener('click', function() {
    window.location.href = 'index-head.html';
  });
