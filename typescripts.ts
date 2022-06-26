//function example
//this
//class example
//Globalscope
//function return type and nonreturntypes
//Prototypes


//global scope on files



// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = 1;


// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// // comment lin e below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error


//Special type
//Before start take the return type and nonreturn type and property


let ID:any = 1;
let Name:string = "Ang";
//       + 
function MyCharAt(Position:number){
    if(Position == 0){
        return "A";
    }
    else if(Position == 1){
        return "n";
    }
    else if(Position == 2){
        return "g";
    }
}

// String.prototype.MyCharAt = function(){  -- iNJS

// }


//before here start with function return type and nonreturn type and propety
//readonly for array and tupels
let ID1 : readonly number[] = [10];





// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.
const Employee:[number , string , boolean] = [1,"",false];




type CarYear = number;
const myCarYear : CarYear = 1990;
console.log(myCarYear);

type ID = number;
const EmployeeID : EmployeeID = 21345;

type  Department = string;
const EmployeeDepartment : Department = "Angular";

type Employee = {
    EmployeeID : ID,
    EmpoyeeDepartment : Department
}

const FMEmployee : Employee = {
    EmployeeID : 1235,
    EmpoyeeDepartment : "Madan"
}


interface Employee2{
    EmployeeID : number,
    EmpoyeeDepartment : string
}

const FMEmployee1 : Employee2  = {
    EmployeeID : 1234,
    EmpoyeeDepartment : "Angular"
}


//Extension

interface LocaitonOfEmployee{
    Location : string;
}

interface Employee1 extends LocaitonOfEmployee{
    EmployeeID : number,
    EmpoyeeDepartment : string
}

const FMEmployee2 : Employee1  = {
    EmployeeID : 1234,
    EmpoyeeDepartment : "Angular",
    Location : "madan"
}

//Union types
const EmployeeID5 : string | number = 1;


//Named parameters
function Customer({CustomerID,CustomerName}:{CustomerID:number,CustomerName:string}){

}

var obj = {
    CustomerID : 1 ,
    CustomerName : "madan"
}

Customer(obj);


//Rest parameter

//casting with as opearator

let x:unknown = 12;








//========================================

class Google{

     GooglePrivacyID:number;
    // private GooglePrivacyID:number;
     //private static GooglePrivacyID:number;
     GoogleEstablishedDate : number;
    // readonly GoogleEstablishedDate : number;
     GoogleSearch : string;

     constructor(GooglePrivacyID , GoogleEstablishedDate , GoogleSearch){
        this.GooglePrivacyID = GooglePrivacyID;
        this.GoogleEstablishedDate = GoogleEstablishedDate;
        this.GoogleSearch = GoogleSearch;
     }


    getEmployeesList(){

    }

    getGooglePrivacyId(){
       return this.getGooglePrivacyId();
    }



}


//Inheritance multiple typescript


//
//Generica

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

//nullble checks

const Id:any = null;
//ID ?? "No value"























