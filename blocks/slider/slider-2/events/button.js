export function initializeButtonEvents(sliders, showSlide, updateButtons, countSlides) {
    sliders.forEach((sliderElem, sliderIndex) => {
        const nextButtons = sliderElem.querySelectorAll('.slider-flex__control--next');
        const prevButtons = sliderElem.querySelectorAll('.slider-flex__control--prev');

        nextButtons.forEach((nextButton) => {
            nextButton.addEventListener('click', () => {
                if (sliderElem.slider.index < countSlides(sliderElem.slider)) {
                    sliderElem.slider.index += 1;
                    showSlide(sliderElem.slider, sliderElem.slider.index);
                    updateButtons(sliderElem, sliderElem.slider.index, countSlides(sliderElem.slider));
                }
            });
        });

        prevButtons.forEach((prevButton) => {
            prevButton.addEventListener('click', () => {
                if (sliderElem.slider.index > 0) {
                    sliderElem.slider.index -= 1;
                    showSlide(sliderElem.slider, sliderElem.slider.index);
                    updateButtons(sliderElem, sliderElem.slider.index, countSlides(sliderElem.slider));
                }
            });
        });
    });
}


export function updateButtons(sliderElem, index, totalSlides) {
    const prevBtn = sliderElem.querySelector('.slider-flex__control--prev');
    const nextBtn = sliderElem.querySelector('.slider-flex__control--next');
    prevBtn.disabled = (index === 0);
    nextBtn.disabled = (index === totalSlides - 1);
}
