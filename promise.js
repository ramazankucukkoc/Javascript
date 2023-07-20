
//promise
const promiseTutorials =()=>{
let data = new Promise((resolve,reject)=>{ 
let status =200;
if (status === 200) 
resolve("Çalıştı");
else
reject("Error")

   }) 
.then(()=>{console.log("Olumlu");})
.catch((err)=>{ console.error(err);  })  

}
promiseTutorials();





