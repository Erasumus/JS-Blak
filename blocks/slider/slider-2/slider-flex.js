import {initializeMouseEvents} from './events/mouse.js';
import {initializeTouchEvents} from './events/touch.js';
import {initializeButtonEvents, updateButtons} from './events/button.js';
import {countSlides, preventDragEvents, setSliderPosition, sliderTranslate} from './utils/slider-utils.js';

export function sliderFlex() {
    document.addEventListener('DOMContentLoaded', () => {
        const sliders = Array.from(document.querySelectorAll('.slider-flex'));

        sliders.forEach(sliderElem => {
            const slider = {
                index: 0,
                startX: 0,
                startTranslate: 0,
                currentTranslate: 0,
                isPressed: false,
                isDragged: false,
                smoothAnimate: false,
                slides: sliderElem.querySelector('.slider-flex__slides'),
                get slideWidth() {
                    return this.slides.clientWidth;
                }
            };

            sliderElem.slider = slider; // Сохраняем объект слайдера в элементе DOM

            initializeMouseEvents(slider, setSliderPosition, updateButtons, countSlides, sliderTranslate);
            initializeTouchEvents(slider, setSliderPosition, updateButtons, countSlides, sliderTranslate);
            initializeButtonEvents([sliderElem], showSlide, updateButtons, countSlides);
            preventDragEvents(slider);

            function showSlide(slider, index) {
                slider.slides.style.transition = 'transform 0.3s ease';
                slider.slides.style.transform = `translateX(${-index * slider.slideWidth}px)`;
                slider.currentTranslate = -index * slider.slideWidth;
            }

            function handleResize() {
                const totalSlides = countSlides(slider);
                slider.index = Math.min(slider.index, totalSlides - 1);
                slider.currentTranslate = -slider.index * slider.slideWidth;
                setSliderPosition(slider, true);
                updateButtons(sliderElem, slider.index, totalSlides);
            }

            window.addEventListener('resize', handleResize);

            updateButtons(sliderElem, slider.index, countSlides(slider));
        });
    });
}
