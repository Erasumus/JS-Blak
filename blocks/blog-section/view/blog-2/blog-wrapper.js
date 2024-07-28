import {blogListRender} from "../../render/blogList-render.js";

export function blogWrapper2(blogData, numberOfTemplates) {
    return `
    <section class="section blog-section-2">
        <div class="container">
            <div class="title-block">
                <p class="title-block__title"> Блог и новости </p>
                <p class="title-block__subtitle"> test события: </p>
            </div>
            <div class="row">
                ${blogListRender(blogData, numberOfTemplates)}
            </div>
        </div>
    </section>
    `
}