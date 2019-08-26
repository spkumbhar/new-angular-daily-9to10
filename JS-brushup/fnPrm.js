//this is shape of function 

function fnPrm(fn){
    fn()//passed parameter is called here 
}


function prm(){
    console.log(`this function we passed as parameter to parameterised function`)
}

// below lines are calling the parameterised function in 3 ways 
//passing simple function as paramater 
fnPrm(prm)
//passing anonymous function 
fnPrm(function(){
    console.log(`calling annom fn as param`)
})
//passing lambda
fnPrm(()=>console.log(`we passed lambda function here`))