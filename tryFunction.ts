function addTwoNums(num1: number, num2: number) {
        return num1 + num2;    
}

function  printResult(num:number): void {
    console.log('Result: ' + num)
}

printResult(addTwoNums(10.8, 12.2))


let combineValues: (a: number, b: number) => number; // 

combineValues = addTwoNums;

console.log(combineValues(10.6, 14.9))