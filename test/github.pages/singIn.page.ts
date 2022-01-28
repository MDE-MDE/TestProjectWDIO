export class SingInPage {
    get inputUsername(){
        return $('#login_field')
    }

    get inputPassword(){
        return $('#password')
    }

    get singInBtn(){
        return $('[value="Sign in"]')
    }

    async clickSingInBtn(){
        await this.singInBtn.click()
    }

    get forgotPasswordBtn(){
        return $('[href="/password_reset"]')
    }

    async clickForgotPassBtn(){
        await this.forgotPasswordBtn.click()
    }

    get incorrectContainer(){
        return $('#js-flash-container')
    }

    get reposContainer(){
        return $('#repos-container').$('h3*=Create your')
    }

    get formResetPass(){
        return $('#forgot_password_form')
    }

    get formResetPassInput(){
        return $('#email_field')
    }
}