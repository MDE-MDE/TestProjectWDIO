import { CreateAccountPage } from "../../github.pages/createAccount.page";
import { NavMenuHeader } from "../../github.pages/navMenu.header";
import { OpenPage } from "../../github.pages/open.page";
import { PricingPlansPage } from "../../github.pages/pricingPlans.page";
import { RandomValue } from "../../github.pages/random.value";
import { SingUpPage } from "../../github.pages/singUp.page";

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const PricingPlans = new PricingPlansPage()
const CreateAccount = new CreateAccountPage()
const Rand = new RandomValue()
const NavMenu = new NavMenuHeader()

describe('Открытие формы регистрации из выпадающего списка Pricing', ()=>{
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Открытие выпадающего списка Pricing', async () => {
        await SingUp.canvasGlobal.moveTo() //TODO: временное решение
        await NavMenu.summary[2].moveTo()
        console.log("Menu name: " + await NavMenu.summary[2].getText())
        await browser.saveScreenshot('test/screenshots/thirdDropDownMenu.png')
        await expect(NavMenu.dropDown[2]).toBeDisplayed()
    })

    it('Нажатие на пункт меню Plans', async () => {
        await NavMenu.clickPricingPlans()
        await expect(PricingPlans.pricingH1).toHaveTextContaining('Choose the plan that’s right for you.')
    })

    it('Нажатие на кнопку Join for free plan', async () => {
        await PricingPlans.free.scrollIntoView()
        await PricingPlans.clickFree()
        await expect(CreateAccount.heading).toHaveText('Create your account')
    })

    it('Вставка случайного имени', async () => {
        let username = Rand.userName('CrAcc')
        await CreateAccount.username.setValue(username)
        console.log("Username: " + await CreateAccount.username.getValue())
        await CreateAccount.username.click()
        await expect(CreateAccount.success).toBeDisplayed()
    })

    it('Вставка случайной почты', async () => {
        let email = Rand.emailName('Test')
        await CreateAccount.email.setValue(email)
        console.log("Email: " + await CreateAccount.email.getValue())
    })

    it('Вставка случайного пароля', async () => {
        let password = Rand.password()
        await CreateAccount.password.setValue(password)
        console.log("Password: " + await CreateAccount.password.getValue())
    })

    it('Подписка на рассылки', async () => {
        await CreateAccount.clickEmailPreferences()
        await expect(CreateAccount.emailPreferences).toBeSelected()
    })

    it('Скриншот формы создания аккаунта', async () => {
        await CreateAccount.heading.scrollIntoView()
        await browser.saveScreenshot('test/screenshots/createAccountPage.png')
    })
})