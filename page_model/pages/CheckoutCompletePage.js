import { Selector, t } from 'testcafe';

class CheckoutCompletePage {
    constructor() {
        this.pageTitle = Selector('.title');
        this.confirmationMessage = Selector('h2.complete-header');
    }
}

export default new CheckoutCompletePage();