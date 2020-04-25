// unknow type
let userInput : unknown;
let userName: string

userInput = 10
userInput =  'Mohamed'

if (typeof userInput === 'string') {
    userName = userInput
}


// never type (never has return and never return undefind)
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
    // while(true)
}

generateError("error happened", 500)