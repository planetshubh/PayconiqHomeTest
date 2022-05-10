import { Selector, t } from 'testcafe';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
// import xPathToCss from 'xpath-to-css';



class InventoryPage {
    constructor() {
        this.pageTitle = Selector('.title');
        this.inventoryItemNameButtonLink = Selector('div.inventory_item_name');
        this.shoppingCartButton = Selector('div.shopping_cart_container');
        //////
        // const xPath = '//div[@class = "inventory_item_name"]/../../following-sibling::div/child::button'
        // this.css = xPathToCss(xPath)
    }

    async clickOnInventoryItem(inventoryItemName) {
        await t.click(this.inventoryItemNameButtonLink.withText(inventoryItemName));
    }

    async clickOnShoppingCartButton() {
        await t.click(this.shoppingCartButton);
    }

    async clickOnLogoutLinkButton() {
        await t.click(Header.burgerMenuButton);
        await t.click(SideBar.logoutLinkButton);
    }

// //////////////////////////////

//     async clickOnAddToCartOrRemove(inventoryItemName) {
//         await t.click(this.css.withText(inventoryItemName));
//     }
}

export default new InventoryPage();