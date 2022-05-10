import { Selector, t } from 'testcafe';

class CartPage {
    constructor() {
        this.pageTitle = Selector('.title');
        this.itemName = Selector('div.inventory_item_name');
        this.checkoutButton = Selector('.checkout_button');
        this.continueShoppingButton = Selector('#continue-shopping');
    }

    async clickOnCheckoutButton() {
        await t.click(this.checkoutButton);
    }
    async clickOnContinueShoppingButton() {
        await t.click(this.continueShoppingButton);
    }
}
export default new CartPage();