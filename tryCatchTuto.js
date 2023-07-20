

//try - catch exception

let tryCatchTuto =() => {

    try {
        alertx("Pop - up");


    } catch (error) {
        console.log("Hata mesajı :"+ error.message);
        console.log("Hata mesajı :"+ error.name);
        console.log("Hata Mesajı :"+ error);


    }
    finally{
        console.log("db close");
        console.log("port close");

    }
    console.log("son satır");
}
tryCatchTuto();

// debug nedir ?
//yazdıgımızda yerde istediğimiz sonuç çıkmıyorsa 

const debugData =()=>{
let sum =0;
for (let i = 1; i < 10; i++) {
    sum =sum + i;   
    
}
console.log("Toplam ="+sum);
}
debugData();
