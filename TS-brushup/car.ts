export default class Car {
    constructor(
       public speed: number,
        public weight: number,
    ){
        this.speed = speed
        this.weight = weight
    }
    acccelarate(){
        console.log(`car method`)
    }
}
let car = new Car(12,100)
car.acccelarate()
