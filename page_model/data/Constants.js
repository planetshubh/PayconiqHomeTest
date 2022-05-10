import dotenv from 'dotenv';
dotenv.config();

const CREDENTIALS = {
    VALID_USER: {
        SAUCEDEMO_VALID_USERNAME: "standard_user"
    },
    INVALID_USER: {
        SAUCEDEMO_LOCKED_USERNAME: "locked_out_user"
    }
};

const PAGE = "https://www.saucedemo.com/"
const PASSWORD = "secret_sauce";
const INVENTORY_ITEMS = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
const CHECKOUT_INFO = ['Random', 'Person', '1234'];

export {
    PAGE, PASSWORD, CREDENTIALS, INVENTORY_ITEMS, CHECKOUT_INFO
};