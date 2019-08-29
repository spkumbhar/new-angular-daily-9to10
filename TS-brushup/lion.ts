import { Animal } from './animal';
import { GpsListner } from './gpsListner';
class Lion extends Animal implements GpsListner {
    public size:number
    public wt : number
    constructor(size :number , wt:number){

        super()
        this.size=size
        this.wt=wt
        console.log("constructor called")
    }
    walk(){

        console.log("lion is walking")
    }
    eat(){
        super.eat()
        console.log("lion is eating")
        console.log(this)
    }
    locate(lat: number,lng :number) {
        console.log(`I am in locate function`)
    }

    
}
let lion = new Lion(12,100)
lion.size =34
lion.wt=120
lion.eat()
lion.run()
lion.walk()
lion.locate(20,10)