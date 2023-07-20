//monad :Bir tanesin girdisi bir tanesi çıktısına monad denir.

const birinci =()=>{
    let user =Number(prompt("Bir sayı giriniz ="));
return user;
}


const ikinci =()=>{
let data =birinci();
console.log(Math.sqrt(data));
}
