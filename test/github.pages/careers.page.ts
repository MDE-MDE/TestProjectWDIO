export class CareersPage{
    get headingText(){
        return $('h1*=Come build')
    }

    get openPositionsBtn(){
        return $('a[href="#positions"]')
    }

    async clickOpenPositionsBtn(){
        (await this.openPositionsBtn).click()
    }

    get openPositions(){
        return $('#positions')
    }

    get listPositions(){
        return $('.pb-md-6').$$('h3')
    }

    async outputPositions(){
        for(let i = 0; i < await this.listPositions.length; i++){
            console.log(`! ${i}: ` + await this.listPositions[i].getText())
        }
    }
}