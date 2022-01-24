export class CreateAccountPage{
    get heading(){
        return $('h1.lh-condensed-ultra')
    }

    get username(){
        return $('#user_login')
    }

    get email(){
        return $('#user_email')
    }

    get password(){
        return $('#user_password')
    }

    get emailPreferences(){
        return $('#all_emails')
    }

    async clickEmailPreferences(){
        await this.emailPreferences.click()
    }

    get success(){
        return $('#input-check-5258')
    }
}