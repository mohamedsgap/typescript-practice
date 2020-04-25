// union type in TS

// alies 
type Combinable = number | string;

function combine(num1: Combinable, num2: Combinable) {
    
   let result;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString()
    }   
    return result 
}

const combineNums = combine(10.3, 11.7)
const combineName = combine("Mohamed", 'Abdou')

console.log(combineName, combineNums)
