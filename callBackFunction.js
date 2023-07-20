
const birinci = (data) => {
    return Math.pow(data,2);
}
    
const ikinci =(callBackFunction)=>{
let user =Number(prompt("Lütfen Bir sayı giriniz"));
let data =callBackFunction(user);
console.log(data);

}

ikinci(birinci);



