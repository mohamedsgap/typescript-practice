// unknow type
var userInput;
var userName;
userInput = 10;
userInput = 'Mohamed';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type (never has return and never return undefind)
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true)
}
generateError("error happened", 500);
