//console.log('My code goes here!')

function addTwoNums(num1: number, num2: number, printResult: boolean ) {
    if (printResult){
        return num1 + num2;
    }
}

function concateFirstLastName(fname: string, lname: string){
    return `My name is ${fname} ${lname}!`
}

const num1 = 15.2
const num2 = 14.8
const printResult = true

const fname = 'Mohamed'
const lname = 'Abdel Nasser'

const result = addTwoNums(num1,num2, printResult)
const fullName = concateFirstLastName(fname, lname)

console.log(result)
console.log(fullName)