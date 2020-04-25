function addTwoNums(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(addTwoNums(10.8, 12.2));
var combineValues; // 
combineValues = addTwoNums;
console.log(combineValues(10.6, 14.9));
