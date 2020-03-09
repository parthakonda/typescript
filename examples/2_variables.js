// Variables - Let Vs Var
function doSomethingWithVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
doSomethingWithVar();
function doSomethingWithLet() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    // This will show an error message
    // But the .js file will be still generated
    console.log(i);
}
doSomethingWithLet();
