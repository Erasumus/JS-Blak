export function initializeMouseEvents(slider, setSliderPosition, updateButtons, countSlides, sliderTranslate) {
    function handleMouseMove(e) {
        slider.smoothAnimate = false;
        if (!slider.isPressed) return;
        slider.isDragged = true;
        const deltaX = e.pageX - slider.startX;
        sliderTranslate(slider, deltaX);
        setSliderPosition(slider, slider.smoothAnimate);
    }

    function handleMouseUp() {
        if (!slider.isPressed) return;
        slider.isPressed = false;
        slider.slides.style.cursor = 'grab';
        slider.slides.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        slider.index = Math.round(Math.abs(slider.currentTranslate) / slider.slideWidth);
        setSliderPosition(slider, true); // Use smooth animation when releasing mouse
        updateButtons(slider.index, countSlides(slider));
    }

    slider.slides.addEventListener('mousedown', (e) => {
        slider.isPressed = true;
        slider.isDragged = false;
        slider.startX = e.pageX;
        slider.startTranslate = slider.currentTranslate;
        slider.slides.style.cursor = 'grabbing';
        slider.slides.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });
}
