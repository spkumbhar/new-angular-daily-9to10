import Car from './car';
class bmw extends Car{
    constructor(
      speed?:number,
      weight?:number,  
      public color? :string  
    ){
        super(speed,weight)
        this.color=color
        console.log(this)
    }   
}
let bmwObj = new bmw(100,1000,'black')
bmwObj.color=`red`
let newBmw = new bmw()

