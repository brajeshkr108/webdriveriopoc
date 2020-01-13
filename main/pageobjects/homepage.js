class HomePage {


    get books() {
        return $("(//a[contains(text(),'Books')])[1]")
    }

    get items() {
        //const text = $$('.product-grid')[0];
        //return text.$('.item-box')[0]
        //console.log(text.$('.item-box')[0].click()); // outputs: "API"

        //return $(".product-grid .item-box")
        return $("div.product-grid div.item-box:nth-child(1) div.product-item div.picture a:nth-child(1) > img:nth-child(1)")


    }

    get addToCart() {
        return $("//input[@id='add-to-cart-button-13']")
    }

    get shoppingCart() {
        return $("//span[text()='Shopping cart']")
    }

    clickBooks() {
        this.books.click();
    }


    clickItem() {
        this.items.click();
    }


    clickaddToCart() {
        this.addToCart.click();
    }

    clickshoppingCart() {
        this.shoppingCart.click();
    }

}

export default new HomePage();