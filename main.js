
// Mudar o header enquanto scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

// Menu btn
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Back to top button
const toTop = document.querySelector(".arrow-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300) {
        toTop.classList.add("active");
        toTop.classList.add("pisca");
    } else {
        toTop.classList.remove("active");
        toTop.classList.remove("pisca");
    }
})

//owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false
    });
  });

