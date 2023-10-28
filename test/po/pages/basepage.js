const {TopMenu}=require('./../components')
class BasePage{
    constructor(url){
        this.url=url;
        this.topMenu = new TopMenu();

        browser.addCommand("waitAndClick", async function () {
            await this.waitForDisplayed();
            await this.click();
        }, true)

    }

    open(){
        return browser.url(this.url);
    }

    
}
module.exports = BasePage;