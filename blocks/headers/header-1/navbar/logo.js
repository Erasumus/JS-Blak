export function Logo(img_logo){
    const [[altImage, urlImage]] = Object.entries(img_logo);

    if(!altImage.trim() || !urlImage.trim()){
        console.log("Некорректная загрузка лого", Object.entries(img_logo));
        return ``;
    } else {
        return `
            <a class="navbar__logo logo" href="/">
                <img alt="${altImage}" src="${urlImage}">
            </a>
    `
    }
}