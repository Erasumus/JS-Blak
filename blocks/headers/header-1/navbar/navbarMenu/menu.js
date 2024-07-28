import {ListItem} from './listItem.js';
import {Social} from "./Mobile/social.js";
import {Logo} from "../logo.js";

export function Menu(img_logo, phone_number, social, menuData){
    return `
        <div class="navbar__menu navbar-menu">
            <!-- Логотип бургер меню -->
            <div class="container mobile">
                ${Logo(img_logo)}
            </div>
            <!-- Логотип бургер меню -->
            ${ListItem(menuData)}
            <!-- Доп. информация бургер меню-->
            ${Social(phone_number, social)}
            <!-- Доп. информация бургер меню-->
          </div>
    `
}