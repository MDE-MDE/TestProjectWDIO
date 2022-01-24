import { NavMenuHeader } from "../../github.pages/navMenu.header";
import { OpenPage } from "../../github.pages/open.page";
import { SingUpPage } from "../../github.pages/singUp.page";

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const NavMenu = new NavMenuHeader()

describe('MouseHover на выпадающий список', ()=>{
    it('Открытие главной страницы github', async () => {
        await browser.setWindowSize(1280, 720)
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('First dropdown menu', async function(){
        await SingUp.canvasGlobal.moveTo() //TODO: временное решение
        await NavMenu.summary[0].moveTo()
        console.log("First: " + await NavMenu.summary[0].getText())
        await browser.saveScreenshot('test/screenshots/firstDropDownMenu.png')
        await expect(NavMenu.dropDown[0]).toBeDisplayed()
    })
    
    it('Second dropdown menu', async function(){
        await SingUp.canvasGlobal.moveTo() //TODO: временное решение
        await NavMenu.summary[1].moveTo()
        console.log("Second: " + await NavMenu.summary[1].getText())
        await browser.saveScreenshot('test/screenshots/secondDropDownMenu.png')
        await expect(NavMenu.dropDown[1]).toBeDisplayed()
    })

    it('Third dropdown menu', async function(){
        await SingUp.canvasGlobal.moveTo() //TODO: временное решение
        await NavMenu.summary[2].moveTo()
        console.log("Third: " + await NavMenu.summary[2].getText())
        await browser.saveScreenshot('test/screenshots/thirdDropDownMenu.png')
        await expect(NavMenu.dropDown[2]).toBeDisplayed()
    })
})