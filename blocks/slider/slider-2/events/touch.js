export function initializeTouchEvents(slider, setSliderPosition, updateButtons, countSlides, sliderTranslate) {
    slider.slides.addEventListener('touchstart', (e) => {
        slider.isPressed = true;
        slider.isDragged = false;
        slider.startX = e.touches[0].clientX;
        slider.startTranslate = slider.currentTranslate;
    });

    slider.slides.addEventListener('touchend', (e) => {
        if (!slider.isPressed) return;
        slider.isPressed = false;
        slider.slides.style.cursor = 'grab';

        const touchX = e.changedTouches[0].clientX;
        if (touchX > slider.startX && slider.index > 0) {
            slider.index -= 1;
        } else if (touchX < slider.startX && slider.index < countSlides(slider)) {
            slider.index += 1;
        }
        setSliderPosition(slider, true); // Use smooth animation when releasing touch
        updateButtons(slider.index, countSlides(slider));
    });

    slider.slides.addEventListener('touchmove', (e) => {
        if (!slider.isPressed) return;
        slider.isDragged = true;
        const deltaX = e.touches[0].clientX - slider.startX;
        sliderTranslate(slider, deltaX);
        setSliderPosition(slider);
    });
}
