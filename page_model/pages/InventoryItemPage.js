import { Selector, t } from 'testcafe';

class InventoryItemPage {
    constructor() {
        this.pageTitle = Selector('div.product_label');
        this.inventoryItemName = Selector('.inventory_details_name');
        this.addToCartButton = Selector('button.btn_primary').withText('ADD TO CART');
        this.removeItemButton = Selector('button.btn_secondary').withText('REMOVE');
        this.backButton = Selector('.inventory_details_back_button');
    }

    async clickOnAddItemToCartButton() {
        await t.click(this.addToCartButton);
    }

    async clickOnRemoveButton() {
        await t.click(this.removeItemButton);
    }

    async clickOnBackButton() {
        await t.click(this.backButton);
    }
}

export default new InventoryItemPage();