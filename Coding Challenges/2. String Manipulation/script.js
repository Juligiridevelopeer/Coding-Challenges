function manipulateString(str) {
    // Convert the input string to uppercase
    const manipulatedString = str.toUpperCase();
    
    // Define and return the callback function logString
    function logString() {
        console.log(`The manipulated string is: ${manipulatedString}`);
    }
    
    // Return the logString callback function
    return logString;
}

// Example usage:

// Call manipulateString with an input string
const logUpperCase = manipulateString("Hello, World!");

// Call the returned callback function logString
logUpperCase(); // Output: The manipulated string is: HELLO, WORLD!
