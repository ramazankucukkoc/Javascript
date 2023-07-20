//filter yapısı
let arr =()=>{
    const numbers =[3,55,66,44,31,23,45];
return numbers;
}

let arrResult =()=>{
    let data=arr();
    //    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

 let result1=  data.filter((value,index,array)=>{
        return value%2==0;
    }).forEach((value,index,array)=>{
        document.write(`${index} - ${value} <br/>`)
    });

}
arrResult();