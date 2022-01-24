export class SingUpPage {

    get ribbonButtonSingUp(){
        return $('.HeaderMenu').$('a[href*="/signup?ref_cta"]')
    }

    async clickRibbonSingUp(){
        await this.ribbonButtonSingUp.click()
    }

    get inputSingUpEmail(){
        return $('[action="/signup"]').$('#user_email')
    }

    get buttonSingUp(){
        return $('[action="/signup"]').$('button')
    }

    async clickSingUp(){
        await this.buttonSingUp.click()
    }

    get footerSingUp(){
        return $('a[href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F"]')
    }

    async clickFooterSingUp(){
        await this.footerSingUp.click()
    }

    get footerContainer(){
        return $('.mb-md-6 h2')
    }

    get canvasGlobal(){
        return $('.js-globe-canvas')
    }

    get footer(){
        return $('footer')
    }

    get footerCon(){
        return this.footer.$$('.container-xl')[0]
    }

    get careers(){
        return $('[href="/about/careers"]')
    }

    async clickCareers(){
        await this.careers.click()
    }
}