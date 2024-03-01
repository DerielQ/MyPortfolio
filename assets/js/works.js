window.addEventListener('scroll', function() {
    var popupContainer = document.getElementById('popup-container');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 100) { 
      popupContainer.style.right = '50px';
    } else {
      popupContainer.style.right = '-400px';
    }
});