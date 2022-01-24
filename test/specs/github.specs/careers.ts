import { OpenPage } from "../../github.pages/open.page"
import { SingUpPage } from "../../github.pages/singUp.page"
import { RandomValue } from "../../github.pages/random.value"
import { HomeSingUp } from "../../github.pages/home_singUp.page"
import { CareersPage } from "../../github.pages/careers.page"

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const Rand = new RandomValue()
const HomeSing = new HomeSingUp()
const Careers = new CareersPage()

describe('Ввод произвольных значений в форму регистрации github', () => {
    it('Открытие главной страницы github', async () => {
        await browser.setWindowSize(1280, 720)
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Scroll to footer', async function(){
        await SingUp.footer.scrollIntoView()
        await expect(SingUp.footer).toBeDisplayedInViewport()
        await browser.saveScreenshot('test/screenshots/footer.png')
    })

    it('Go to the career page', async function(){
        await SingUp.clickCareers()
        await expect(Careers.headingText).toHaveText('Come build the home for all developers')
    })

    it('Click open positions button', async function() {
        await Careers.clickOpenPositionsBtn()
        await expect(Careers.openPositions).toBeDisplayedInViewport()
    })

    it('Output of item names to the console', async function() {
        await Careers.outputPositions()
    })
})