// My main variables: The carousel/slider number/slider speed
var carousel = document.getElementById('carousel');
var slides = 5;
var speed = 4000;


function carouselHide(num) {
    indicators[num].setAttribute('advancement', '');
    slides[num].setAttribute('advancement', '');

    slides[num].style.opacity=0;
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('advancement', 'active');
    slides[num].setAttribute('advancement', 'active');

    slides[num].style.opacity=1;
}

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('advancement', '');
            slides[i].setAttribute('advancement', '');
            
            carouselHide(i);
        }

        // Set defined slide as active
        indicators[slide].setAttribute('advancement', 'active');
        slides[slide].setAttribute('advancement', 'active');
        carouselShow(slide);

        // Stop the auto-switcher
        // clearInterval(switcher);
    };
}

function switchSlide() {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
        
        if ((indicators[i].getAttribute('advancement') == 'active') && (i !== (indicators.length-1))) {
            nextSlide = i + 1;
        }

        // Remove all active states & hide
        carouselHide(i);
    }

    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}

if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var indicators = carousel.querySelectorAll('.indicator');

    var switcher = setInterval(function() {
        switchSlide();
    }, speed);

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}