import { Animal } from './animal';
class Lion extends Animal {
    walk(){

        console.log("lion is walking")
    }
    eat(){
        super.eat()
        console.log("lion is eating")
    }
}
let lion = new Lion()
lion.eat()
lion.run()
lion.walk()