fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // Check if response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Log the data to the console
        console.log('Posts:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
