import { OpenPage } from "../../github.pages/open.page"
import { SingUpPage } from "../../github.pages/singUp.page"
import { RandomValue } from "../../github.pages/random.value"
import { HomeSingUp } from "../../github.pages/home_singUp.page"

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const Rand = new RandomValue()
const HomeSing = new HomeSingUp()

describe('Открытие формы регистрации из поля ввода почты', () => {
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Ввод случайного значения в поле ввода почты', async () => {
        let email = Rand.emailName('Test')
        await SingUp.inputSingUpEmail.setValue(email)
        await expect(SingUp.inputSingUpEmail).toBeDisplayedInViewport()
        await browser.saveScreenshot('test/screenshots/inputValue.png')
    })

    it('Переход на страницу регистрации', async () => {
        await SingUp.clickSingUp()
        await HomeSing.emailContainer.waitForDisplayed({
            timeout:5000
        })
        await expect(HomeSing.email).toBeDisplayedInViewport()
        await expect(HomeSing.welcomeText).toHaveText("Welcome to GitHub! Let's begin the adventure")
    })

    it('Открытие поля ввода пароля', async () => {
        console.log("Email: " + await HomeSing.email.getValue())
        await browser.pause(500) //TODO: временное решение
        await HomeSing.emailContinueClick()
        await HomeSing.passwordContainer.waitForDisplayed({
           timeout:5000
        })
        await expect(HomeSing.passwordContainer).toBeDisplayed()
    })

    it('Ввод случайного пароля и открытие поля ввода логина', async () => {
        let password = Rand.password()
        await HomeSing.password.setValue(password)
        console.log("Password: " + await HomeSing.password.getValue())
        await browser.pause(500) //TODO: временное решение
        await HomeSing.passwordContinueClick()
        await HomeSing.usernameContainer.waitForDisplayed({
            timeout:5000
        })
        await expect(HomeSing.usernameContainer).toBeDisplayed()
    })

    it('Ввод случайного логина и открытие поля подписки на рассылки', async () => {
        let login = Rand.userName('HomeSing')
        await HomeSing.username.setValue(login)
        console.log("UserName: " + await HomeSing.username.getValue())
        await browser.pause(999) //TODO: временное решение
        await HomeSing.usernameContinueClick()
        await HomeSing.optContainer.waitForDisplayed({
            timeout:5000
        })
        await expect(HomeSing.optContainer).toBeDisplayed()
    })

    it('Нажатие на клавишу "Continue" в поле подписки на рассылки', async () => {
        await expect(HomeSing.labelOptContainer).toHaveTextContaining('Would you like')
        await browser.pause(999) //TODO: временное решение
        await HomeSing.optContinueClick()
        await HomeSing.capchaContainer.waitForDisplayed({
            timeout:5000
        })
        await expect(HomeSing.capchaContainer).toBeDisplayed()
        await expect(HomeSing.capchaText).toHaveText('Verify your account')
    })

    it('Скриншот формы регистрации', async () => {
        await HomeSing.welcomeText.scrollIntoView()
        await HomeSing.password.click()
        await HomeSing.visiblePassword.click()
        await browser.saveScreenshot('test/screenshots/singUpPage.png')
        await expect(browser).toHaveUrlContaining('https://github.com/signup')
    })
})