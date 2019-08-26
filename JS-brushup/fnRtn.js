function fnRtn(){
    console.log(`we are in returning function now`)
    function inFun(){
        console.log(`we are in inner function `)
    }
    return inFun

}
//only parent funtion called
fnRtn()
//both outer and inner callled here
fnRtn()()

//function reference 
let fnVar=fnRtn()

console.log(fnVar)


///function returning lambda function 
function rtnLambda(){
    console.log(`rtnlamba`)
    return(()=>console.log(`returning lambda function `))
}
rtnLambda()()
let varRtnLambda = rtnLambda()
varRtnLambda()