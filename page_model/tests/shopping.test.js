import LoginPage from '../pages/LoginPage';
import InventoryItemPage from '../pages/InventoryItemPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage';
import CheckoutCompletePage from '../pages/CheckoutCompletePage';
import { INVENTORY_ITEMS, CHECKOUT_INFO } from '../data/Constants';
import { MESSAGES } from '../data/Messages';
import { CREDENTIALS, PASSWORD, PAGE } from '../data/Constants';

fixture('Shopping Cart')
    .page(PAGE)
    .beforeEach(async t => {
        await t.maximizeWindow();
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.SAUCEDEMO_VALID_USERNAME, PASSWORD);
    });

// 4. Navigate to the shopping cart without adding any products
test('User can view the Shopping Cart page even without any products', async t => {
    await InventoryPage.clickOnShoppingCartButton();

    await t.expect(CartPage.pageTitle.exists).ok();
    await t.expect(CartPage.pageTitle.innerText).eql('YOUR CART');
});

// 5. Add single item to the shopping cart and verify same product is added in the cart, 
// then click Remove against the product and verify it is removed from cart too.
test('User can add & remove an item to the shopping cart', async t => {
    const inventoryItem = INVENTORY_ITEMS[0];     //'Sauce Labs Backpack'

    await t.expect(InventoryPage.pageTitle.exists).ok();

    await InventoryPage.clickOnInventoryItem(inventoryItem);
    await InventoryItemPage.clickOnAddItemToCartButton();
    await InventoryItemPage.clickOnBackButton();
    await InventoryPage.clickOnShoppingCartButton();

    await t.expect(CartPage.itemName.count).eql(1);
    await t.expect(CartPage.itemName.innerText).eql(inventoryItem);

    await CartPage.clickOnContinueShoppingButton();
    await InventoryPage.clickOnInventoryItem(inventoryItem);
    await InventoryItemPage.clickOnRemoveButton();

    await t.expect(CartPage.itemName.count).eql(0);
});

// 6. Add multiple items to the shopping cart and verify same products are added in the cart
test('User can add multiple items to the shopping cart', async t => {

    selectMultipleProducts();

    await InventoryPage.clickOnShoppingCartButton();
    await t.expect(CartPage.itemName.count).eql(3)

    for(let i = 0; i < INVENTORY_ITEMS.length; i ++) {
        for(let j = 0; j < CartPage.itemName.count; j ++) {
            await t.expect(CartPage.itemName.innerText).eql(INVENTORY_ITEMS[i]);
        }
    }
});

// 7. Validate to purchase the product without providing checkout info.
test('User can\'t continue with purchase if he/she doesn\'t enter checkout information', async t => {
   
    selectMultipleProducts();

    await InventoryPage.clickOnShoppingCartButton();
    await t.expect(CartPage.itemName.count).eql(3);

    await CartPage.clickOnCheckoutButton();
    await CheckoutPage.clickOnContinueButton();
    await t.expect(CheckoutPage.firstNameErrorMessage.innerText).eql(MESSAGES.ERROR_FIRST_NAME_CHECKOUT);
});

//  8. End to End - user can select multiple products in cart, provide checkout details and completes the purchase
test('User can continue with purchase when checkout information provided', async t => {

    selectMultipleProducts();

    await InventoryPage.clickOnShoppingCartButton();
    await t.expect(CartPage.itemName.count).eql(3)

    // products on the cart - should match the selected product
    for(let i = 0; i < INVENTORY_ITEMS.length; i ++) {
        for(let j = 0; j < CartPage.itemName.count; j ++) {
            await t.expect(CartPage.itemName.innerText).eql(INVENTORY_ITEMS[i]);
        }
    }

    await CartPage.clickOnCheckoutButton();

    await t.expect(CheckoutPage.pageTitle.innerText).eql('CHECKOUT: YOUR INFORMATION');
    await CheckoutPage.fillCheckoutForm(CHECKOUT_INFO[0], CHECKOUT_INFO[1], CHECKOUT_INFO[2]);
    await CheckoutPage.clickOnContinueButton();

    await t.expect(CheckoutOverviewPage.pageTitle.innerText).eql('CHECKOUT: OVERVIEW');

    // Final order items - should be same which were added earlier
    for(let i = 0; i < INVENTORY_ITEMS.length; i ++) {
        for(let j = 0; j < CheckoutOverviewPage.inventoryItemName.count; j ++) {
            await t.expect(CartPage.itemName.innerText).eql(INVENTORY_ITEMS[i]);
        }
    }

    // Click the finish button
    await t.click(CheckoutOverviewPage.finishButton);

    await t.expect(CheckoutCompletePage.pageTitle.innerText).eql('CHECKOUT: COMPLETE!');
    await t.expect(CheckoutCompletePage.confirmationMessage.innerText).eql(MESSAGES.PURCHASE_CONFIRMATION);
});

// reuseable function to select multiple products
function selectMultipleProducts(){
    INVENTORY_ITEMS.forEach((item) => {
        InventoryPage.clickOnInventoryItem(item);
        InventoryItemPage.clickOnAddItemToCartButton();
        InventoryItemPage.clickOnBackButton();
    });
}