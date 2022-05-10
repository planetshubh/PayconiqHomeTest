import { Selector } from 'testcafe';

class SideBar {
    constructor() {
        this.logoutLinkButton = Selector('#logout_sidebar_link');
    }
}

export default new SideBar();