import { Selector, t } from 'testcafe';

class CheckoutOverviewPage {
    constructor() {
        this.pageTitle = Selector('.title');
        this.inventoryItemName = Selector('div.inventory_item_name');
        this.finishButton = Selector('button[data-test="finish"]');
        this.cancelButton = Selector('a.cart_cancel_link');
    }
}

export default new CheckoutOverviewPage();