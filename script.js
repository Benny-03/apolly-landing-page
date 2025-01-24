var currentIndex = 1;
var currentTranslation = 1;

var slides = document.querySelectorAll('.slide');
var slider = document.querySelector('.slider');
var circles = document.querySelectorAll('.cerchio');
var buttons = document.querySelectorAll('.button');
var pannels = document.querySelectorAll('.pannel');

function showSlide() {
    slides.forEach((slide, index) => {
        if(currentIndex === index){
            slide.classList.add('active');
            circles[index].classList.add('active');
        }else{
            slide.classList.remove('active');
            circles[index].classList.remove('active');
        }
    })
}

function showPannel() {
    pannels.forEach((pannel, index) => {
        if(currentIndex === index){
            pannel.style.opacity = 1;
            buttons[index].classList.add('active');
        }else{
            pannel.style.opacity = 0;
            buttons[index].classList.remove('active');
        }
    })
}
showPannel();

function NextPrevPannel(index) {
    currentIndex = index;
    showPannel();
}


var offset = 355;

function prevSlide() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    currentTranslation = currentIndex * offset * -1 + 355;
    slider.style.transform = 'translateX(' + currentTranslation + 'px)'; 
    showSlide();
}

function nextSlide() {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : slides.length - 1;
    currentTranslation = currentIndex * offset * -1 + 355;
    slider.style.transform = 'translateX(' + currentTranslation + 'px)'; 
    showSlide();
}


const swiper = new Swiper('.swiper', {
    //prametri opzionali
    direction: 'vertical',
    loop: true,

    // se ho bisogno di una impaginazione
    /*pagination: {
        el: '.swiper-pagination',
    },*/

    //freccie per la navigazione
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //se ho bisogno di una scrollbar
    /*scrollbar: {
        el: '.swiper-scrollbar',
    },*/
});


function openMenu() {
    document.querySelector('.menu').classList.remove('closed')
}

function closeMenu() {
    document.querySelector('.menu').classList.add('closed')
}