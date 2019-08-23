let dvMob = document.getElementById("dvMob")
let count =10
for (i=0;i<10;i++){
    let ipNum = document.createElement("input")
    ipNum.type = "number"

    ipNum.onmouseenter = function changeStyle(){
        ipNum.style.background = magicColor()

    }
    dvMob.appendChild(ipNum)
    
}
function magicColor(){
    let r = Math.random() * 256 
    let g =Math.random() * 256
    let b = Math.random() * 256
    console.log(`${r} ${g} ${b}`)
    return `rgb(${r}, ${g}, ${b})`
 
}