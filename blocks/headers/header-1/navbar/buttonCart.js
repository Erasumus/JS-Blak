export function ButtonCart(isShop){
    if(isShop) {
        return ``
    } else {
        return `
                  <div class="cart-header cart-parent">
                        <a href="/cart">
                            <i class="fa fa-shopping-cart"></i>
                            <span class="number"> 4 </span>
                       </a>
                    </div>
        `
    }
}