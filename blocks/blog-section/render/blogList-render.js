import {Blog} from "../view/blog-1/blog.js";
import {Blog2} from "../view/blog-2/blog2.js";

export function blogListRender(postData, blogTemplate) {
    // Проверяем наличие данных и шаблона
    if (!postData) {
        console.log("postData is not");
        return '';
    }

    if (!blogTemplate) {
        console.log("blogTemplate is not");
        return '';
    }

    let renderBlog;

    // Определяем функцию рендеринга на основе шаблона
    switch (blogTemplate) {
        case 1:
            renderBlog = Blog;
            break;
        case 2:
            renderBlog = Blog2;
            break;
        default:
            console.log("Template not found");
            return '';
    }

    // Рендерим блог в зависимости от количества постов
    if (postData.length <= 4) {
        return renderBlog(postData);
    } else {
        return `
            <div class="slider-flex">
                <div class="slider-flex__slides">
                    ${renderBlog(postData)}
                </div>
                <div class="slider-flex__control">
                    <button class="slider-flex__control--prev">&#10094;</button>
                    <button class="slider-flex__control--next">&#10095;</button>
                </div>
            </div>
        `;
    }
}