function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if the type of both values is the same
    return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Value 1:");
let value2 = prompt("Enter Value 2:");

// Convert the input values to numbers
value1 = Number(value1);
value2 = Number(value2);

// Check if the values are of the same type or both are NaN
alert(isSameType(value1, value2));
