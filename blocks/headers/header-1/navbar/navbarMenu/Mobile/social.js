export function Social(phone_number, social){

    const socialLinks = Object.values(social).map(({ href, icon }) => {
        console.log(href, icon);
        return `
        <li class="list-socials__item">
            <a href="${href}"><i class="fab fa-${icon}"></i></a>
        </li>
        `;
    });

    return `
    <div class="container mobile">
              <div>
                <a href="${phone_number}">${phone_number}</a>
              </div>
              <div class="list-socials">
                <!--TODO foreach socials-->
                ${socialLinks}
              </div>
            </div>
`
}