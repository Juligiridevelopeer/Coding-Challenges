async function fetchDataFromMultipleEndpoints() {
    try {
        // Fetch data from the first API endpoint
        const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!responseTodo.ok) {
            throw new Error(`HTTP error! Status: ${responseTodo.status}`);
        }
        const todoData = await responseTodo.json();

        // Fetch data from the second API endpoint
        const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!responsePost.ok) {
            throw new Error(`HTTP error! Status: ${responsePost.status}`);
        }
        const postData = await responsePost.json();

        // Combine results into a single object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined data object
        console.log('Combined Data:', combinedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and combine data from multiple endpoints
fetchDataFromMultipleEndpoints();
