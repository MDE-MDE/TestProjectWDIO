export class HomeSingUp{
    get welcomeText(){
        return $('h1.sr-only')
    }

    get emailContainer(){
        return $('#email-container')
    }

    get email(){
        return this.emailContainer.$('#email')
    }

    get emailContinue(){
        return this.emailContainer.$('button[data-continue-to="password-container"]')
    }

    async emailContinueClick(){
        await this.emailContinue.click()
    }

    get passwordContainer(){
        return $('#password-container')
    }
    get password(){
        return this.passwordContainer.$('#password')
    }

    get visiblePassword(){
        return this.passwordContainer.$('button[data-target="visible-password.showButton"]')
    }

    get passwordContinue(){
        return this.passwordContainer.$('button[data-continue-to="username-container"]')
    }

    async passwordContinueClick(){
        await this.passwordContinue.click()
    }

    get usernameContainer(){
        return $('#username-container')
    }

    get username(){
        return this.usernameContainer.$('#login')
    }

    get usernameContinue(){
        return this.usernameContainer.$('button[data-continue-to="opt-in-container"]')
    }

    async usernameContinueClick(){
        await this.usernameContinue.click()
    }

    get optContainer(){
        return $('#opt-in-container')
    }

    get labelOptContainer(){
        return $('label[for="opt_in"]')
    }

    get optContinue(){
        return this.optContainer.$('button[data-continue-to="captcha-and-submit-container"]')
    }

    async optContinueClick(){
        await this.optContinue.click()
    }

    get capchaContainer(){
        return $('#captcha-and-submit-container')
    }

    get capchaText(){
        return this.capchaContainer.$('.text-mono')
    }
}