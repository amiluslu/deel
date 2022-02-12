const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get headerInfo() {
        return $('#h1');
    }

    get createAContractButton() {
        return $("//p[text()='Create A Contract']");
    }

    async verifyHeaderIsDisplayed () {
        expect(this.headerInfo).toBeDisplayed();
    }

    async clickCreateAContract(){
        await this.createAContractButton.waitForClickable();
        await this.createAContractButton.click();
    }
}

module.exports = new HomePage();
