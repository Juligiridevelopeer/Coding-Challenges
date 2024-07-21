fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(response => {
        // Check if response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Log the data to the console (this won't execute in case of error)
        console.log('Post:', data);
    })
    .catch(error => {
        // Log and display error message
        console.error('Error fetching data:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Failed to fetch data from the API.';
        document.body.appendChild(errorMessage);
    });
