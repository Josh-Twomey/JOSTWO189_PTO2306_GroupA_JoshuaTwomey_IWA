const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

/*I decided to use Not a Number function to check for numerical values. typeof 
would not filter through each character but the whole variable.*/

const primaryValid = isNaN(primaryPhone) ? false : true;
const secondaryValid = isNaN(secondaryPhone) ? false : true;  

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
