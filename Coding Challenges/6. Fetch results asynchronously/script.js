async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data from API:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and log data
fetchDataFromAPI();
