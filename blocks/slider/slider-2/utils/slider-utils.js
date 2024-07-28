export function countSlides(slider) {
    return Math.ceil(slider.slides.scrollWidth / slider.slideWidth) - 1;
}

export function sliderTranslate(slider, deltaX) {
    slider.currentTranslate = slider.startTranslate + deltaX;
    if (slider.currentTranslate > 0) {
        slider.currentTranslate = 0;
    } else if (slider.currentTranslate < -(slider.slides.scrollWidth - slider.slideWidth)) {
        slider.smoothAnimate = true;
        slider.currentTranslate = -(slider.slides.scrollWidth - slider.slideWidth);
    }
}

export function setSliderPosition(slider, smoothAnimate = false) {
    if (smoothAnimate) {
        slider.slides.style.transition = `transform 0.3s ease-in-out`;
    } else {
        slider.slides.style.transition = `transform 0s ease-in-out`;
    }
    slider.slides.style.transform = `translateX(${slider.currentTranslate}px)`;
}

export function preventDragEvents(slider) {
    slider.slides.querySelectorAll('img, a').forEach((element) => {
        element.addEventListener('dragstart', (e) => e.preventDefault());
        element.addEventListener('click', (e) => {
            if (slider.isDragged) e.preventDefault();
        });
    });
}
