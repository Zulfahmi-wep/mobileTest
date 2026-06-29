export class LoginPage {
    get loginButton() {
        return 'android=new UiSelector().text("LOGIN")';
    }

    get productsTitle() {
        return 'android=new UiSelector().text("PRODUCTS")';
    }

    get inputFields() {
        return 'android.widget.EditText';
    }
}

export default new LoginPage();