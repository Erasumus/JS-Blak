import blogData from "../../Model/blogData.js";
import {blogWrapper} from "../view/blog-1/blog-wrapper.js";
import {blogWrapper2} from "../view/blog-2/blog-wrapper.js";

export function BlogRender(numberOfTemplates) {
    let wrapper;
    switch (numberOfTemplates) {
        case 1:
            wrapper = blogWrapper;
            break;
        case 2:
            wrapper = blogWrapper2;
            break;
        default:
            console.log("Шаблон блога не найден");
            return defaultBlogTemplate();
    }
    return wrapper(blogData, numberOfTemplates);
}

function defaultBlogTemplate() {
    return `<section class="section blog-section-2">
                <div class="container">
                    <div class="title-block">
                        <p class="title-block__title"> Блог и новости </p>
                        <p class="title-block__subtitle"> Последние события: </p>
                    </div>
                    <div class="row">
                        Новостей нет
                    </div>
                </div>
            </section>`;
}