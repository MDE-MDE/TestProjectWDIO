export class PricingPlansPage{
    get pricingH1(){
        return $('h1*=Choose the plan')
    }

    get free() {
        return $('[href*="/join?plan=free"]')
    }

    async clickFree(){
        await this.free.click()
    }
}