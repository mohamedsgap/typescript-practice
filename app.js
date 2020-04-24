//console.log('My code goes here!')
function addTwoNums(num1, num2, printResult) {
    if (printResult) {
        return num1 + num2;
    }
}
function concateFirstLastName(fname, lname) {
    return "My name is " + fname + " " + lname + "!";
}
var num1 = 15.2;
var num2 = 14.8;
var printResult = true;
var fname = 'Mohamed';
var lname = 'Abdel Nasser';
var result = addTwoNums(num1, num2, printResult);
var fullName = concateFirstLastName(fname, lname);
console.log(result);
console.log(fullName);
