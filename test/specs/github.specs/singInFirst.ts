import { OpenPage } from "../../github.pages/open.page"
import { SingUpPage } from "../../github.pages/singUp.page"
import { SingInPage } from "../../github.pages/singIn.page"

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const SingIn = new SingInPage()

describe('Открытие и заполнение формы входа с учетными данными', () => {
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Нажатие на кнопку "Sing in" в шапке на главной странице', async () => {
        await SingUp.clickSingInBtn()
        await expect(browser).toHaveTitle('Sign in to GitHub · GitHub')
    })

    it('Ввод логина и пароля', async () => {
        await SingIn.inputUsername.setValue('Test1-yndx')
        await SingIn.inputPassword.setValue('123456789&Aa')
        await browser.saveScreenshot('test/screenshots/singInform.png')
    })

    it('Нажатие на кнопку "Sing in" в форме входа', async () => {
        await SingIn.clickSingInBtn()
        await expect(SingIn.reposContainer).toHaveTextContaining('first project')
    })
})