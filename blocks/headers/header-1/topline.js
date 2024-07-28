export function Topline(phone_number, social) {

    const socialLinks = Object.values(social).map(({href, icon}) =>    {
    console.log("topline" + icon, href);
        return `
        <li class="list-socials__item">
                        <a href="${href}"><i class="fab fa-${icon}"></i></a>
         </li>
    `
    });

    return `
    <div class="topline">
        <div class="container">
            <div class="topline__wrapper">
                <ul class="topline__info">
                    <li class="topline__info-item">круглосуточно</li>
                    <li class="topline__info-item"><a href="${phone_number}">${phone_number}</a></li>
                </ul>
                <!--end left-->
                <ul class="topline__socials list-socials">
                    ${socialLinks}
                </ul>
            </div>
        </div>
    </div>
    `
}