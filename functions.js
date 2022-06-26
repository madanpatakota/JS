function getCustoemrsSalaryById(ID) {
    console.log(ID);
    console.log(this);
    return "300000";
}


const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error


String.prototype.MyCharAt = function(){
    
}

let a = "Madan";
a.MyCharAt()
a.charAt()


class Customers {
    _ID;
    constructor(ID){
       this._ID = ID;    
    }

    getCustomeLocationByID(){
        console.log("Madan");
    }

    getCustomerDetailsByID(){
        console.log("Madan Mohan");
    }

    getCustomersSalaryById(ID) {
        console.log(this._ID);
        console.log(this);
        return "400000";
    }
}

getCustoemrsSalaryById(1);



var customers = new Customers(1);
customers.getCustomersSalaryById();







