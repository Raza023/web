//code comments.

//output on console
console.log('Hello world');

//variable
let name = "Hassan";
console.log(name);
let firstName="Hassan";     //firstName is camel notation to write a variable.
let secondName="Raza";


//constant
const x=1;
//x=1; can't do this now.
console.log(x);
console.log(2); //2 is also a constant.


//primitives /value types.
//string
//number
//Boolean
//undefined
//null
let stringVar="hello";    //string literal.
let numberVar=5;          //30.1 is also a number literal.
let BooleanVar1 = true;   //or false.
let undefinedVar;         //or let undefinedVar = undefined;  typeof undefinedVar is also undefined.
let nullVar = null;       //typeof nullVar is object.


//dynamic typing.       means we can change the type of variable.
//to check we use typeof.
let val="yeah";
val=3;
console.log(val);
console.log(typeof val);

//Reference types
//objects
//arrays
//functions

//objects.
let person = {             //object literal
    pName:"Hassan Raza",
    pAge:21
};
console.log(person);

//dot Notation
console.log(person.pName);

//braket Notation.
let property = "pName"
console.log(person[property]);
property = "pAge"
console.log(person[property]);

// for (x in person)
// {
//     console.log(x);
//     console.log(person[x]);
// }


//arrays (its always dynamic we can change the length  and content of array object after initializng.)

let arr = ["one","two"];        //typeof arr is object.
arr[2]="three";                 //dynamic array.
arr[3]=4                        //wen can give different typeof values like list.
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.length);


//functions.

function show(name)
{
    console.log("Hello "+name);
}

function square(num)
{
    return num*num;
}

show("Ali");
show("Hassan");
show("Hussain");

console.log(square(15));