export function showSlide(slider) {
    slider.slides.style.transition = 'transform 0.3s ease';
    slider.slides.style.transform = `translateX(${-slider.index * slider.slideWidth}px)`;
    slider.currentTranslate = -slider.index * slider.slideWidth;
}

export function setSliderPosition(slider) {
    if (slider.smoothAnimate) {
        slider.slides.style.transition = 'transform 0.3s ease-in-out';
    } else {
        slider.slides.style.transition = 'transform 0s ease-in-out';
    }
    slider.slides.style.transform = `translateX(${slider.currentTranslate}px)`;
}
