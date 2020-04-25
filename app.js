function combine(num1, num2) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var combineNums = combine(10.3, 11.7);
var combineName = combine("Mohamed", 'Abdou');
console.log(combineName, combineNums);
