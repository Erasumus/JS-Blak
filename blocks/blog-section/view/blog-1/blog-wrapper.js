import {blogListRender} from "../../render/blogList-render.js";

export function blogWrapper(blogData, numberOfTemplates) {
    return `
        <section class="blog-section-1">
            <div class="container">
            <div class="wrapper-title">
                <div class="title-block">
                        <p class="title-block__title"> Блог и новости </p>
                        <p class="title-block__subtitle"> Последние события: </p>
                    </div>
                </div>
                <div class="row">
                    ${blogListRender(blogData, numberOfTemplates)};
                </div>
            </div>
        </section>
    `;
}


