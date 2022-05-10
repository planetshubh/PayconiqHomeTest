import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import { CREDENTIALS, PASSWORD, PAGE } from '../data/Constants';

fixture('Logout feature testing')
    .page(PAGE)
    .beforeEach(async t => {
        await t.maximizeWindow();
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.SAUCEDEMO_VALID_USERNAME, PASSWORD);
    });

// 3. Logout from product's page
test('User can perform logout after login', async t => {

    await t.expect(InventoryPage.pageTitle.exists).ok();
    await InventoryPage.clickOnLogoutLinkButton();
    await t.expect(LoginPage.loginWrapper.exists).ok();

});