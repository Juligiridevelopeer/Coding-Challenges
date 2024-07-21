function ageInDays(person) {
    // Extract first name, last name, and age from the person object
    const { firstName, lastName, age } = person;

    // Concatenate first name and last name into fullName
    const fullName = `${firstName} ${lastName}`;

    // Calculate age in days (assuming average year has 365.25 days)
    const ageInDays = age * 365.25;

    // Return a callback function that logs the message
    return function logDetails() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

// Example usage:

// Create a person object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Call ageInDays with the person object to get the logDetails callback function
const logDetails = ageInDays(person);

// Call the returned callback function to log the details
logDetails(); // Output: The person's full name is John Doe and their age in days is 10957.5.
