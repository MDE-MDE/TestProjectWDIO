import { ExploreGitHubPage } from "../../github.pages/exploreGitHub.page";
import { NavMenuHeader } from "../../github.pages/navMenu.header";
import { OpenPage } from "../../github.pages/open.page";
import { SingUpPage } from "../../github.pages/singUp.page";

const BrowserPage = new OpenPage()
const NavMenu = new NavMenuHeader()
const ExploreGitHub = new ExploreGitHubPage()
const SingUp = new SingUpPage()

describe('MouseHover на выпадающий список Explore', ()=>{
    it('Открытие главной страницы github', async () => {
        await browser.setWindowSize(1280, 720)
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Expore dropdown menu', async function(){
        await SingUp.canvasGlobal.moveTo() //TODO: временное решение
        await NavMenu.summary[1].moveTo()
        console.log("Menu name: " + await NavMenu.summary[1].getText())
        await browser.saveScreenshot('test/screenshots/thirdDropDownMenu.png')
        await expect(NavMenu.dropDown[1]).toBeDisplayed()
    })

    it('Select Plans in dropdown menu', async function(){
        await NavMenu.clickExploreGitHub()
        await expect(browser).toHaveUrlContaining('/explore')
    })

    it('Click on the Topics tab', async function(){
        await ExploreGitHub.clickTopics()
        await expect(ExploreGitHub.h1).toHaveText('Topics')
        await browser.saveScreenshot('test/screenshots/topicsPage.png')
    })
})