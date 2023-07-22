let objectTutorials =()=>{

    const personObj ={
        "name": "Ramazan",
        "surname": "Küçükkoç",
        "number": 2180,
        "isLogin": true,
        "software": ["Windows","Mac","HTML5","Android","iOS",".NET"],
        fullName:function () {
            return this.name + " " + this.surname;
        }
    }
    console.log(personObj);
    console.log(personObj.name);
    console.log(personObj.surname);

    //variable nested
    console.log(personObj["name"]);
    console.log(personObj["surname"]); 
    
    //array 
    console.log(personObj.software[0]);
    console.log(personObj.software[1]);

    const objectToString =JSON.stringify(personObj);
    console.log(objectToString);

    const stringToObject = JSON.parse(objectToString);
    console.log(stringToObject);
   
    //object variable
    personObj.language="English";
    console.log(personObj.language);

    //function callback
    console.log(personObj.fullName());


}
objectTutorials();

//







