function doubleWithCallback(array, callback) {
    // Create a new array to store the doubled values
    const doubledArray = [];
    
    // Iterate through the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the callback function to double the current element
        const doubledValue = callback(array[i]);
        // Push the doubled value into the new array
        doubledArray.push(doubledValue);
    }
    
    // Return the new array with doubled values
    return doubledArray;
}

// Example usage:

// Callback function to double a number
function double(num) {
    return num * 2;
}

// Input array of integers
const numbers = [1, 2, 3, 4, 5];

// Call doubleWithCallback with the input array and callback function
const doubledNumbers = doubleWithCallback(numbers, double);

// Output the doubled numbers array
console.log("Original array:", numbers);
console.log("Doubled array:", doubledNumbers);
