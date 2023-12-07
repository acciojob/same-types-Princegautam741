function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
	else if (isNaN(value1) || isNaN(value2)){
		return false;
	}

    // Check if both values are of the same type (number, string)
   else if (typeof value1 === typeof value2) {
        return true;
    }
 
}
// Get user input using prompt
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

//Display the result
alert(isSameType(value1, value2));