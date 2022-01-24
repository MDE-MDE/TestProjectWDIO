export class EnterprisePage{
    get mainContainer(){
        return $('.col-9-max')
    }

    get startFreeBtn(){
        return this.mainContainer.$('[href*="/organizations/enterprise_plan"]')

        //return this.mainContainer.then($('[href*="/organizations/enterprise_plan"]'))
    }

    async clickStartFreeBtn(){
        await this.startFreeBtn.click()
    }

    get enterpriseCloud(){
        return $('[href*="setup_organization=true"]')
    }

    get enterpriseServer(){
        return $('[href*="source=pricing-card-enterprise"]')
    }

    async clickEnterpriseCloud(){
        await this.enterpriseCloud.click()
    }

    async clickEnterpriseServer(){
        await this.enterpriseServer.click()
    }

    async windowsHistoryBack(){
        await browser.back()
    }

    get heading(){
        return $('h1*=Pick')
    }

    get headingEnterpriseServer(){
        return $('h1*=Start your 45-day')
    }

    get name(){
        return $('#contact_request_name')
    }

    get company(){
        return $('#contact_request_organization_name')
    }

    get email(){
        return $('#contact_request_email')
    }

    get phone(){
        return $('#contact_request_phone')
    }

    get chooseInstall(){
        return $('#contact-form-linkto').$$('[name="contact_request[instance_type]"]')
    }

    async randomChooseInstall(){
        await this.chooseInstall[Math.round(Math.random() * await this.chooseInstall.length)].click()       
    }

    get questions(){
        return $('#questions_yes')
    }

    async clickYesQuestions(){
        await this.questions.click()
    }

    get questinList(){
        return $('#questions-list')
    }

    get acceptTerms(){
        return $('#contact_request_agreed_to_terms')
    }

    async clickAcceptTerms(){
        await this.acceptTerms.click()
    }
}