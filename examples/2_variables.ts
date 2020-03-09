// Variables - Let Vs Var

function doSomethingWithVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log(i);
}

doSomethingWithVar();

function doSomethingWithLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    // This will show an error message
    // But the .js file will be still generated
    console.log(i);
}

doSomethingWithLet();

// Changing value types on-fly
let employeeName = "Partha";
// The following will raise an error
// Due to updating the string inferred
// variable into number
// Note: However this will compiled successfully
// and .js file will be generated
employeeName = 1;

// Achieving above
let a;
a = "Partha";
a = 1;

// Declaring with types
let numberType: number;
let booleanType: boolean;
let stringType: string;
let anyType: any;
let arrayOfNumber: number[];
let arrayOfString: string[];
let arrayOfBoolean: boolean[];
let arrayOfAny: any[];

// enum type
// By default, Red will be assigned to 0
// Green will be assigned to 1
// Blue will be assigned to 2
enum Color {
    Red, Green, Blue
};
let wallColor = Color.Red;
let floorColor = Color.Blue;

// The above is equivalent to the following
// best practive: explicit mention
enum AwesomeColor {
    Red = 0, Green = 1, Blue = 2
};
let awesomeWallColor = Color.Red;
let awesomeFloorColor = Color.Blue;

// Type assertion
let message;
message = "Something";

let endsWithThing = (<string>message).endsWith('thing');

// Or

let isAThing = (message as string).endsWith('thing');