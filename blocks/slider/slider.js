export function Slider(index) {


    addEventListener("DOMContentLoaded", () => {
        const slide = document.querySelectorAll(".slide");
        const mainSlider = document.querySelector(".main-slider");
        let startX, endX;

        function showSlide(index) {
            slide.forEach((slide, i) => {
                slide.style.display = (i === index) ? "block" : "none";
            });
        }

        console.log(document.querySelector(".prev"));

        /*----------------------------------------------------------------PC-START----------------------------------------------*/
        document.querySelector(".prev").addEventListener("click", () => {
            index = (index > 0) ? index - 1 : slide.length - 1;
            showSlide(index);
        });

        document.querySelector(".next").addEventListener("click", () => {
            index = (index < slide.length - 1) ? index + 1 : 0
            showSlide(index);
        })
        /*----------------------------------------------------------------PC-END---------------------------------------------------*/

        /*----------------------------------------------------------------MOBILE-START----------------------------------------*/
        mainSlider.addEventListener("touchstart", (e) => {
            const sliderRect = mainSlider.getBoundingClientRect();
            startX = e.touches[0].clientX - sliderRect.left;
            console.log("start: " + startX + " " + sliderRect.left);
        });


        mainSlider.addEventListener("touchmove", (e) => {
            const sliderRect = mainSlider.getBoundingClientRect();
            endX = e.touches[0].clientX - sliderRect.left;
            console.log("end: " + endX + " " + sliderRect.left);
        });


        mainSlider.addEventListener("touchend", () => {
            const diff = startX - endX;
            console.log(diff);
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    index = (index < slide.length - 1) ? index + 1 : 0;
                } else {
                    index = (index > 0) ? index - 1 : slide.length - 1;
                }
                showSlide(index);
            }
        });
        /*----------------------------------------------------------------MOBILE-END----------------------------------------*/

        showSlide(index);
    })
}
