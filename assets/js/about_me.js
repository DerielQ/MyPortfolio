let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

window.addEventListener('scroll', function() {
    var containers = document.querySelectorAll('.container');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    containers.forEach(function(container) {
        var containerTop = container.getBoundingClientRect().top;
        if (containerTop < windowHeight * 0.9) {
            container.classList.add('slide-left');
        }
    });
});

window.addEventListener('scroll', function() {
    var popupContainer = document.getElementById('popup-container');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 100) { 
      popupContainer.style.right = '50px';
    } else {
      popupContainer.style.right = '-400px';
    }
  });