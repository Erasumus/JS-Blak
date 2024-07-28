import {Topline} from "./topline.js";
import {Navbar} from "./navbar/navbar.js";

export function Header(props) {
    const social = props.social || {
        telegram: {
            href: "https://telegram.com",
            icon: "telegram",
        },
        whatsapp: {
            href: "https://whatsapp.ru",
            icon: "whatsapp",
        },
        instagram: {
            href: "https://instagram.com",
            icon: "instagram",
        }
    };
    const phone_number = props.phone || "+7-962-551-68-46";
    const img_logo = props.logo || {"Firus-Digital": "..\\..\\images\\logo\\logo-bgwhite.jpg"}
    const isShop = false;

    const menuData = [
        {label: "Main", href: "/"},
        {label: 'Services', href: '/services'},
        {
            label: 'About', href: "/about", hasDropdown: true, dropdown: [
                {label: "Reviews", href: "/reviews"},
                {label: "Team", href: "/Team"}
            ]
        },
        {label: "Blog", href: "/blog"},
        {label: "Contact", href: "/contact"}
    ]

    //TODO разделить логику на модули
    return `
    <header>
      ${Topline(phone_number, social)}
      ${Navbar(img_logo, phone_number, social, isShop, menuData)}
    </header>
  `
}
