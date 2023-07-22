
let callbackFunctionComputer=[];

for (let i = 0; i < 5; i++) {
    var bilgiler ={computername:parseInt(Math.random()*10),
        price: parseInt(Math.random()*10)}
    callbackFunctionComputer.push(bilgiler);
}
callbackFunctionComputer.forEach((value,index,array)=>{
    document.writeln(`Price => ${value.price}`);
    document.writeln(`${` computer ${value.computername}`}`+'<br/>');

})
console.log(callbackFunctionComputer);

//sadece computername getirme (map)



