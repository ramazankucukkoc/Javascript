
let arr =()=>{
    const numbers =[3,55,66,44,31,23,45];
return numbers;
}

let arrResult =()=>{
    let data=arr();
//    console.log(data);
//    console.log(data[0]);
//    console.log(data[data.length-1]);
//    console.log(data[3]);
//    for (let i = 0; i < data.length; i++) {
// document.write(data[i]+ " ");    
//    }
//    document.write("<br/>");

//    //for in
//    for(let temp in data){
//     document.write(temp + " => "+data[temp]+"<br/>");
//    }
//    //for of
//    document.write("<br/>");

//    for(let temp of data){
//     document.write(temp + " ");
//    }
//    document.write("<br/>");

//    //data foreach
//   // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//    data.forEach(function(value,index,array){
// document.write(`${index} => ${value}<br/>`)
//    });

// document.writeln("Eleman Sayısı ="+data.length);

//push  sona 1 eleman veri eklemesi yapıyor.
data.push(99);

data.unshift(11);
console.log(data);
//pop sona veri 1 eleman çıkarması yapıyor
data.pop()
data.shift();
console.log(data);

data.sort();
console.log(data);

//splice ,slice

}
arrResult();
