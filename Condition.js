const condi =()=>{
    let number =4;
    if (number>=2) {
        console.log("Büyüktür.");
    }
    else{
        console.log("Küçüktür");
    }
}
condi();

//----------------------------------------------------------------
const condi2 =()=>{
    let number =4;
    if (number>=2) 
        console.log("Büyüktür.");  
    else
        console.log("Küçüktür");    
}
condi2();

//----------------------------------------------------------------
const condi3 =()=>{
    let number =4;
    let result =(number>=2)?"Büyüktür":"Küçüktür";
    console.log(result);   
}
condi3();

//----------------------------------------------------------------
// üç tane eşittir varsa türüne bakar.
//iki eşittir varsa türüne bakmaz.
const condi4 =()=>{
    let number =4;
    if (number =="1") {
        console.log("1");
    }
    else if (number==2) {
        console.log("2");
    }
    else if (number==3) {
        console.log("3");
    } else if (number=="4") {
        console.log("4");
    }
    else{
        console.log("Küçüktür");
    }
}
condi4();

//----------------------------------------------------------------Switch Case

//break  :döngü kırmak
//return :metor kırmak
///continue:bir kere mahsus es geç sonra döngüye devam et
const condi5 =()=>{
    switch (number) {
        case 1:
            console.log("1");
            break;//break döngüyü kırar.
            case 2:
                console.log("2");
                break;
            case 3:
            console.log("3");
            break;
            case 4:
            console.log("4");
            break;

        default:
            console.log("1<X<5 dışındadır");
            break;
    }
}
condi5();
