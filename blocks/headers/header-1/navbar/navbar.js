import {Menu} from "./navbarMenu/menu.js";
import {Logo} from './logo.js'
import {ButtonCart} from './buttonCart.js';
import {ButtonMobile} from './navbarMenu/Mobile/button.js';

export function Navbar(img_logo, phone_number, social, isShop, menuData){
    return `
    <nav class="navbar">
        <div class="container navbar-container">
             ${Logo(img_logo)}
             <!-----------Бургер меню-------------->
            <input id="menu-toggle" type="checkbox" />
            <!-----------Бургер меню-------------->
              ${Menu(img_logo, phone_number, social, menuData)}
              ${ButtonCart(isShop)}
              ${ButtonMobile()}
          </div>
      </nav>`
}