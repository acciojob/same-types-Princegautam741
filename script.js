function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if the type of both values is the same
    return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert the input values to numbers
value1 = parseFloat(value1);
value2 = parseFloat(value2);

// Check if the values are of the same type or both are NaN
alert(isSameType(value1, value2));
