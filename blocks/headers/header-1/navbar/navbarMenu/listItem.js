export function ListItem(menuData) {
    return `
    <ul class="navbar-menu__list">
        ${menuData.map(item => `
        <li class="navbar-menu__item">
            <a class="navbar-menu__link" href="${item.href}">
                ${item.label}
                ${item.hasDropdown ? `<i class="fa fa-solid fa-angle-right"></i>` : ''} 
            </a>
            ${item.hasDropdown ? `
                <ul class = "dropdown-menu">
                    ${item.dropdown.map(subItem => `
                        <li class="dropdown-menu__item">
                            <a class="dropdown-menu__item-link" href="${subItem.href}">
                                ${subItem.label}
                                <i class="fa fa-solid fa-angle-right"></i>
                            </a>
                        </li> 
                    `).join('')}
                </ul> ` : ''} 
            </li> `).join('')}
        </ul>
    `
}
