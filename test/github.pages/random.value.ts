export class RandomValue{
    emailName(value:string){
        return `${value}_${Math.round(Math.random() * 99)}@mail.ru`
    }

    userName(value:string){
        return `${value}${Math.round(Math.random() * 99)}${value}`
    }

    password(){
        let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let word = ''
        for (let i = 0; i < 9; i++){
            let num = Math.round(Math.random() * abc.length)
            word += abc[num]
        }
        return `${word}&1a`
    }

    company(){
        let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let word = ''
        for (let i = 0; i < 6; i++){
            let num = Math.round(Math.random() * abc.length)
            word += abc[num]
        }
        return word.toUpperCase()
    }

    phoneNumber(){
        let num = '0123456789'
        let phone = ''
        for (let i = 0; i < 11; i++){
            let iter = Math.round(Math.random() * num.length)
            phone += num[iter]
        }
        return `+7${phone}`
    }

    answerQuestion(){
        let text = "А ещё предприниматели в сети интернет набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований! Таким образом, сложившаяся структура организации предоставляет широкие возможности для экспериментов, поражающих по своей масштабности и грандиозности. Безусловно, укрепление и развитие внутренней структуры играет определяющее значение для дальнейших направлений развития?"
        return text
    }
}