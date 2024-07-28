export function Blog2(postData) {
    return postData.map(post => {
        return `
        <div class="slider-flex__slide col-xs-12 col-md-6 col-lg-6">
            <div class="blog-card-2">
                <a class="blog-card-2__link" href="${post.permalink}">
                    <div class="blog-card-2__wrapper-image">
                        <img class="blog-card-2__image img-fluid"  src="${post.post_img}" alt="${post.alt}" />
                    <div class="blog-card-2__content">            
                    <div class="blog-card-2__text">
                        <p class="blog-card-2__title">${post.title}</p>
                        <p class="blog-card-2__description">${post.short_description}</p>
                    </div>
                    <div class="blog-card-2__bottom">
                        <div class="blog-card-2__button">
                            <div class="button service-section-2__button" >Подробнее</div>
                        </div>
                         <p class="blog-card-2__date">${post.date}</p>
                    </div>
                    </div>
                    <span class="blog-card-2__overlay"></span>
                    </div>
                    <div class="blog-card-2__back">
                        <p class="blog-card-2__description">
                            тест
                        </p>
                     </div>
                </a>
            </div>
            </div>`
    })
}
