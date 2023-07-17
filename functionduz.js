
 // Düz Function işlemleri
  //1 returnsuz parametresiz
function returnsuzparametresiz() {
    console.log("deneme");
}
returnluparametresiz();
//2 returnsuz parametreli
function returnsuzparametreli(adi) {
    console.log("Küçükkoç "+adi);
}
returnsuzparametreli("Ramazan");
//3 returnlu parametresiz
function returnluparametresiz() {
    return "deneme55";
}
let result =returnluparametresiz();
console.log(result);

//4 returnlu parametreli
function returnluparametreli(soyadi) {
     return "Ramazan " + soyadi;
}
let result1 =returnluparametreli("Küçükkoç");
console.log(result1);

 
//function deneme() {} --->Normal Function
// let value = function(){} --->Anonymous Function Function 
//lert value1 = ()=> --->Arrow Function 
