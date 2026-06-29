import loginPage from '../pageobjects/login.page.js';

export class LoginAction {
    async isOnLoginPage() {
        const btn = await $(loginPage.loginButton);
        return await btn.isDisplayed();
    }

    async enterUsername(username) {
        const fields = await $$(loginPage.inputFields);
        if (fields.length >= 1) {
            await fields[0].setValue(username);
        }
    }

    async enterPassword(password) {
        const fields = await $$(loginPage.inputFields);
        if (fields.length >= 2) {
            await fields[1].setValue(password);
        }
    }

    async tapLogin() {
        const btn = await $(loginPage.loginButton);
        await btn.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.tapLogin();
    }

    async waitForProducts() {
        const title = await $(loginPage.productsTitle);
        await title.waitForDisplayed({ timeout: 5000 });
        return await title.isDisplayed();
    }
}

export default new LoginAction();