let myJSON = `{
    "name": "Hassan",
    "age":21,
    "male":true,
    "score":86.74,
    "salary":50000,
    "lisence":null,
    "shopItems": ["Food","clothes","groceries"],
    "myObj": {
        "semester": "6th",
        "CGPA": 3.74,
        "subjects": ["ead","AOA",
        {
            "cpp":"OOP",
            "java":"dsa"
        }]
    }
}`; //JSON string declared.

const obj = JSON.parse(myJSON);      //JSON -> JS OBJECT
const jstr = JSON.stringify(obj);    //JS OBJECT -> JSON str

console.log("JSON STRING:");
console.log(jstr);
console.log("JS OBJECT:");
console.log(obj);

console.log(obj.name);
//console.log(obj["name"]);   //same as above.

console.log(obj.shopItems[2]);
//console.log(obj["shopItems"][2]);   //same as above.

console.log(obj.myObj.CGPA);
//console.log(obj["myObj"]["CGPA"]);   //same as above.

console.log(obj.myObj.subjects[2].java);
//console.log(obj["myObj"]["subjects"][2]["java"]);  //same as above.



// Following code will work only on http or https url just for protection to use .json file.
// go and see it here  (http://jscode.unaux.com/code/5)JSON/read.html)


//-----------------following code can be used to get data from .json file-------------------
//const json_url = "first.json";
//async function getJSON()
//{
//    const response = await fetch(json_url);
//    const obj = await response.json();
//    console.log("It's an "+typeof obj);            //it's already in js object form so no need to parse.
// 
//    //let obj = JSON.parse(data);      //JSON -> JS OBJECT
//
//    console.log(obj); 
//
//    console.log(obj.name);
//    //console.log(obj["name"]);   //same as above.
//
//    console.log(obj.shopItems[2]);
//    //console.log(obj["shopItems"][2]);   //same as above.
//
//    console.log(obj.myObj.CGPA);
//    //console.log(obj["myObj"]["CGPA"]);   //same as above.
//
//    console.log(obj.myObj.subjects[2].java);
//    //console.log(obj["myObj"]["subjects"][2]["java"]);  //same as above.
//} 

//getJSON().catch(error=>{             //calling and error handling.
//    console.log("error is :");
//    console.error(error);
//});


// following code can be used to get data as well.

// fetch("first.json")
// .then(response => response.json())
// .then(data=>{
//     console.log(data);
// }).catch(error=>{            // error handling.
//     console.log("error is :");
//     console.error(error);
// });
    

