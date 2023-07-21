
let callbackFunctionComputer=[];

for (let i = 0; i < 5; i++) {
    var bilgiler ={number: parseInt(Math.random()*10)}
    callbackFunctionComputer.push(bilgiler);
}
callbackFunctionComputer.forEach((value,index,array)=>{
    document.writeln(`${index} ==> ${value.number}`+'<br/>');
})
console.log(callbackFunctionComputer);





