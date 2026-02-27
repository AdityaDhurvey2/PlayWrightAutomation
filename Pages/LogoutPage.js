 exports.LogoutPage = class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logoutButton = page.locator("#logout2");
        this.loginButton = page.locator("#login2");
    }
    async logout() {
        await this.logoutButton.click();
    }
}