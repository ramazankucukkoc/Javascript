let arr =()=>{
    const numbers =[3,55,66,44,31,23,45];
return numbers;
}

let arrResult =()=>{
    let data=arr();
    //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];


 let result1=  data.map((value,index,array)=>{
        return value +=10;
    }).forEach((value,index,array)=>{
        document.write(`${index} - ${value} <br/>`)
    });

}
arrResult();