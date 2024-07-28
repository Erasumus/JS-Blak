export function Blog(postData) {
    return postData.map(post => {
        return `
            <div class="slider-flex__slide col-xs-6 col-md-4 col-lg-3">
                <div class="blog-card-1">
                    <a class="blog-card-1__wrapper-link" href="${post.permalink}">
                        <div class="blog-card-1__wrapper-image">
                            <img class="blog-card-1__image img-fluid" src="${post.post_img}" alt="${post.alt}"/>
                            <span class="blog-card-1__overlay"></span>
                        </div>
                        <div class="blog-card-1__content">
                            <div class="blog-card-1__title">${post.title}</div>
                            <p class="blog-card-1__description">${post.short_description}</p>
                            <div class="blog-card-1__date">
                                ${post.date}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}