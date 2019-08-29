import { GpsListner } from './gpsListner';
import Car from './car';
export class Opts{
    id : number
    name :string
    SaveData(id:number,name?:string ){  // This is optional paramter
        console.log(`${id} saved to db `)
    }
    DeleteData(id:number=12){ // this is default parameter to function

        console.log(`${id} deleted `)

    }
} 
let opt = new Opts()
opt.SaveData(12)
opt.DeleteData(40) 

let gps : GpsListner = {locate:(lat :number,lng:number)=>{}} as GpsListner ///typecast 

gps.locate(1,2)
let obj ={
    locate:(lat:number,lang:number)=>{
            console.log(`in equality check :lattitude :${lat} Longitude ${lang}`)
    }
}
let gp2 : GpsListner = obj /// equality by means of shape of object
obj.locate(23,56)