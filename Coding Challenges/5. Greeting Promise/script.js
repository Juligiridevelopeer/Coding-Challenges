function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
        // Check if name is provided
        if (!name) {
            reject('Name is required'); // Reject promise if name is not provided
        } else {
            // Resolve the promise with the greeting message
            resolve(`Hello, ${name}!`);
        }
    });
}

// Example usage:

// Call greetWithPromise with a name
const name = "Mithun";
greetWithPromise(name)
    .then(greeting => {
        console.log(greeting); // Output: Hello, Mithun!
    })
    .catch(error => {
        console.error('Error:', error);
    });
