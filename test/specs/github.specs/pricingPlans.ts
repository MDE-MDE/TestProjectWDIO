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

describe('MouseHover на выпадающий список Pricing', ()=>{
    it('Открытие главной страницы github', async () => {
        //await browser.setWindowSize(1280, 720)
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Pricing dropdown menu', async function(){
        await SingUp.canvasGlobal.moveTo() //TODO: временное решение
        await NavMenu.summary[2].moveTo()
        console.log("Menu name: " + await NavMenu.summary[2].getText())
        await browser.saveScreenshot('test/screenshots/thirdDropDownMenu.png')
        await expect(NavMenu.dropDown[2]).toBeDisplayed()
    })

    it('Select Plans in dropdown menu', async function(){
        await NavMenu.clickPricingPlans()
        await expect(PricingPlans.pricingH1).toHaveTextContaining('Choose the plan that’s right for you.')
    })

    it('Join for free plan', async function(){
        await PricingPlans.free.scrollIntoView()
        await PricingPlans.clickFree()
        await expect(CreateAccount.heading).toHaveText('Create your account')
    })

    it('Random username', async function(){
        let username = Rand.userName('CrAcc')
        await CreateAccount.username.setValue(username)
        console.log("Username: " + await CreateAccount.username.getValue())
        //await expect(CreateAccount.success).toHaveTextContaining('is available.')
    })

    it('Random email address', async function(){
        let email = Rand.emailName('Test')
        await CreateAccount.email.setValue(email)
        console.log("Email: " + await CreateAccount.email.getValue())
    })

    it('Random password', async function(){
        let password = Rand.password()
        await CreateAccount.password.setValue(password)
        console.log("Password: " + await CreateAccount.password.getValue())
    })

    it('Click Email preferences', async function(){
        await CreateAccount.clickEmailPreferences()
    })

    it('Finish', async function(){
        await CreateAccount.heading.scrollIntoView()
        await browser.saveScreenshot('test/screenshots/createAccountPage.png')
    })
})