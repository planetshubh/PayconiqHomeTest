import { Selector } from 'testcafe';

class Header {
    constructor() {
        this.burgerMenuButton = Selector('#react-burger-menu-btn');
    }
}

export default new Header();