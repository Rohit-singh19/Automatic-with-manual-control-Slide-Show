const slide = document.querySelectorAll('.slideshow');
const slidePointer = document.querySelectorAll('.circle');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

var currentslide = 0;

let timer = setInterval(slideShow,3000);

slideShow();

leftArrow.addEventListener('click', () =>{
    prevSlide();
    updateCirclePointer();
    resetTimer();
});

rightArrow.addEventListener('click', () =>{
    nextSlide();
    updateCirclePointer();
    resetTimer();
});

function prevSlide() {
    if (currentslide ==0) {
        currentslide = slide.length-1;
    }
    else{
        currentslide--;
    }
    slideChange();
}

function nextSlide() {
    if (currentslide == slide.length-1) {
        currentslide = 0;
    }
    else{
        currentslide++;
    }
    slideChange();
}

function slideChange() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('visibility'); 
    }
    slide[currentslide].classList.add('visibility');
}

function updateCirclePointer() {
    for (let i = 0; i < slide.length; i++) {
        slidePointer[i].classList.remove('dot');
        
    }
    slidePointer[currentslide].classList.add('dot');
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(slideShow,3000);
}

function slideShow() {
    nextSlide();
    updateCirclePointer();
}

function circleIndex(n) {
    currentslide = n;

    slideChange();
    updateCirclePointer();
}
