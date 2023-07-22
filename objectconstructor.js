let objectConstructor=()=>{
    let personConstructor=function(name ,surname){
this.name=name;
this.surname=surname;

//yukaridaki objeleri alıyor yani name ile surname alıyor.
console.log(this);
    }
    let personResult =new personConstructor("Ramazan","Küçükkoç");
    console.log(personResult.name+" "+ personResult.surname);
}
objectConstructor();



//call , apply , bind 

let noParemeterCallApplyBind =() => {
    let functionOtherObject=function(){
        document.writeln(`Paremetresiz Function :${this.adi} <br />`)
    }
    let objectData={
        "adi":"Spora Başlıyorum"
    }
    functionOtherObject.call(objectData);
    functionOtherObject.apply(objectData);
    let deneme= functionOtherObject.bind(objectData);
   deneme();


}
noParemeterCallApplyBind();

////////////////////////////////////////////////////////////////
let paremeterCallApplyBind =() => {
    let functionOtherObject=function(surname){
        document.writeln(`Paremetresiz Function :${this.adi} => ${surname} <br />`)
    }
    let objectData={
        "adi":"Spora Başlıyorum"
    }
    functionOtherObject.call(objectData,"Küçükkoç");
    functionOtherObject.apply(objectData,["Küçükkoç"]);
    let deneme= functionOtherObject.bind(objectData,"Küçükkoç");
   deneme();
   

}
paremeterCallApplyBind();