import banners from "../../../Model/bannerData.js";

let banner = banners.map(banner => {
    return `
            <section class="banner2 row center-row">
                <div class="banner2__contentt col-xs-12 col-sm-12 col-md-8 col-lg-7 middle-xs">
                    <div class="banner2__info ">
                        <p class="banner2__title">${banner.title}</p>
                        <p class="banner2__text">${banner.content}</p>
                        <div class="banner2__button">
                            <a class="button button-style-1" href="${banner.link}">Подробнее</a>
                            <a class="button button-style-2" href="#modal">8 800 323 23 15</a>
                        </div>
                    </div>
                </div>
            
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 banner2__image-wrapper">
                    <div class="banner2__img">
                        <img class="img-fluid" src="${banner.image_link}" alt="${banner.image_alt}">
                    </div>
                </div>
            </section>
    `
}).join('');

export function bannerView2() {
    return banner;
}
