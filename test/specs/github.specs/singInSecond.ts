import { OpenPage } from "../../github.pages/open.page"
import { SingUpPage } from "../../github.pages/singUp.page"
import { SingInPage } from "../../github.pages/singIn.page"
import { RandomValue } from "../../github.pages/random.value"

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const SingIn = new SingInPage()
const Rand = new RandomValue()

describe('Открытие и заполнение формы входа без учетных данных или с частичным заполнением', () => {
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Нажатие на кнопку "Sing in" в шапке на главной странице', async () => {
        await SingUp.clickSingInBtn()
        await expect(browser).toHaveTitle('Sign in to GitHub · GitHub')
    })

    it('Нажатие на кнопку "Sing in" в форме входа', async () => {
        await SingIn.clickSingInBtn()
        await expect(SingIn.incorrectContainer).toBeDisplayed()
    })

    it('Ввод случайного пароля и нажатие на кнопку "Sing in" в форме входа', async () => {
        let password = Rand.password()
        await SingIn.inputPassword.setValue(password)
        await SingIn.clickSingInBtn()
        await expect(SingIn.incorrectContainer).toBeDisplayed()
    })

    it('Ввод случайного логина и нажатие на кнопку "Sing in" в форме входа', async () => {
        let name = Rand.userName('Resu')
        await SingIn.inputUsername.setValue(name)
        await SingIn.clickSingInBtn()
        await expect(SingIn.incorrectContainer).toBeDisplayed()
    })

    it('Восстановление пароля', async () => {
        await SingIn.clickForgotPassBtn()
        await expect(SingIn.formResetPass).toBeDisplayed()
    })

    it('Вставка случайной почты', async () => {
        let email = Rand.emailName('Resu')
        await SingIn.formResetPassInput.setValue(email)
        await browser.saveScreenshot('test/screenshots/resetPassowrdForm.png')
    })
})