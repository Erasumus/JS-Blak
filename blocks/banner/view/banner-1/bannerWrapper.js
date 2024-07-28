import {bannerView} from "./bannerView.js";
import {Slider} from "../../../slider/slider.js";

export function bannerWrapper() {
    Slider(0);
    return `
        <section class="slider-section-1">
            <div class="slider main-slider">
                ${bannerView()}
            </div>
            <button class="prev"><i class="fa fa-solid fa-angle-left"></i></button>
            <button class="next"><i class="fa fa-solid fa-angle-right"></i></button> 
        </section> 
    `
}


