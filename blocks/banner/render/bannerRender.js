import {bannerWrapper} from "../view/banner-1/bannerWrapper.js";
import {bannerWrapper2} from "../view/banner-2/bannerWrapper.js";

export function BannerRender(banner) {
    switch (banner) {
        case 1:
            if (bannerWrapper !== null) {
                return bannerWrapper();
            }
            console.log("bannerWrapper1")
            break;
        case 2:
            if (bannerWrapper2 !== null) {
                return bannerWrapper2();
            }
            console.log("bannerWrapper2")
            break;
        default:
            console.log("нет банеров");
            return '';
    }
}


