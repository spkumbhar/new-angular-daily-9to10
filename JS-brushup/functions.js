function myfn(){
    console.log("function called")
}
let funVar = myfn
//console.log(``+funVar)
let newVar = myfn ///accessing referbnce here
console.log(newVar)

//annonymous function 
let fn = function() {
    console.log("calling annomFn()")
} 
console.log(fn)
fn()

let lmdFn= ()=>{
                function inLmDfun(){
                    console.log('this is inner lambda function')
                }    
            console.log("this is lambda function")
    }
lmdFn()


