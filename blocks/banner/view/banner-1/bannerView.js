import banners from '../../../Model/bannersData.js';

let banner = banners.map(banner => {
    return `
            <div class="slide" style="background:url('${banner.image_link}');">
                <div class="slide__text">
                    <p class="title">${banner.title}</p>
                    <p class="text">${banner.content}</p>
                    <div class="main-slide__buttons">
                        <a class="button button-style-1" href="${banner.link}">Подробнее</a>
                        <a class="button button-style-2" href="#modal">8 800 323 23 15</a>
                    </div>
                </div>
            </div>
    `
}).join('');

export function bannerView() {
    return banner
}