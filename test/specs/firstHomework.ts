describe("Первое домашнее задание по курсу WDIO YouTube", () => {
    it ('Перейти на странцу', async () => {
        await browser.url('https://webdriver.io/docs/api')
        const header = await $('.theme-doc-markdown.markdown').$('header')
        console.log(await header.$('h1').getText())
        await expect (header.$('h1')).toHaveText('Introduction')
    })

    it ('Открыть ссылку в новой вкладке', async () => {
        const newTab = await $('*=JSONWire protocol')
        const url = await newTab.getAttribute('href')
        console.log(url)
        await browser.newWindow(url)
        const wiki = await $('#wiki-wrapper')
        await expect (wiki.$('h1')).toHaveText('JsonWireProtocol')
    })

    it ('Проверить, что эл-т strong a видимый для прользователя', async () => {
        const strongA = await $('#wiki-tab')
        console.log(await strongA.isDisplayed())
        const home = await $('strong a[href="/SeleniumHQ/selenium/wiki"]')
        console.log(await home.isDisplayed())
        expect(strongA).toBeDisplayed()
    })

    it ('Переключиться на предыдущую вкладку', async () => {
        await browser.switchWindow('https://webdriver.io/docs/api')
        console.log(await browser.getTitle())
        expect(browser).toHaveTitle('Introduction | WebdriverIO')
    })

    it ('Подождать текст #contribute и он равен Contribute', async () => {
        const contribute = await $('#contribute')
        await browser.waitUntil(async () => (await contribute.getText() === 'Contribute'), {
            timeout: 5000,
            timeoutMsg: "expected text to be different after 5s"
        })
    })

    it ('Скриншот эл-та .postHeaderTitle', async () => {
        const contribute = await $('#contribute')
        await contribute.scrollIntoView()
        await browser.saveScreenshot('test/screenshots/contribute.png')
        expect(contribute).toBeDisplayedInViewport()
    })

    it ('Печать в консоль, результат выполнения команды IsDisplayed для локатора href="https://twitter.com/webdriverio"', async () => {
        const header = await $('.theme-doc-markdown.markdown').$('header')
        await header.$('h1').scrollIntoView()
        const linkTwitter = await $('[href="https://twitter.com/webdriverio"]')
        console.log(await linkTwitter.isDisplayed())
        expect(linkTwitter).toBeDisplayed()
    })

    it ('Печать в ковсоль, результат выполнения команды IsDisplyaedInViewPort для локатора href="https://twitter.com/webdriverio"', async () => {
        const stackOverflow = await $('[href="https://stackoverflow.com/questions/tagged/webdriver-io"]')
        console.log(await stackOverflow.isDisplayedInViewport())
        //expect(stackOverflow).toBeDisplayedInViewport()
    })

    it ('Скролл к эл-ту href="https://twitter.com/webdriverio"', async () => {
        const linkTwitter = await $('[href="https://twitter.com/webdriverio"]')
        await linkTwitter.scrollIntoView()
        await browser.saveScreenshot('test/screenshots/twitter.png')
    })

    it ('Печать в консоль, результат выполнения команды IsDisplayed для локатора href="https://twitter.com/webdriverio"', async () => {
        const linkTwitter = await $('[href="https://twitter.com/webdriverio"]')
        console.log(await linkTwitter.isDisplayedInViewport())
    })

    it ('Печать в ковсоль, результат выполнения команды IsDisplyaedInViewPort для локатора href="https://twitter.com/webdriverio"', async () => {
        const stackOverflow = await $('[href="https://stackoverflow.com/questions/tagged/webdriver-io"]')
        console.log(await stackOverflow.isDisplayed())
    })

    it ('Печать в консоль, результат выполнения команды IsFocused для локатора href="/blog/"', async () => {
        const blog = await $('.navbar__items').$('[href="/blog"]')
        console.log("1" + await blog.isFocused())
        //await expect(blog).toBeFocused()
    })

    it ('Клик по эл-ту href="/blog/"', async () => {
        const blog = await $('.navbar__items').$('[href="/blog"]')
        await blog.click()
        console.log("2" + await blog.isFocused())
        //await expect(blog).toBeFocused()
    })
})