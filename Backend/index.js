// Sarcastic HTTP Status Codes Library
// Inspired by Wikipedia's full list of HTTP status codes

// We don't need the static 'errorCodes' object anymore,
// as we will be fetching the data dynamically.
export const errorCodes = {};

/**
 * Fetches a sarcastic error message for a given HTTP status code from an API.
 * @param {number|string} code The HTTP status code.
 * @returns {Promise<string>} A promise that resolves to the sarcastic error message.
 */
export const getErrorMessage = async (code) => {
    try {
        // The URL of your local API.
        const apiUrl = 'http://localhost:3000'; 
        
        // Use `fetch` to make an asynchronous request to your API endpoint.
        const response = await fetch(`${apiUrl}/error/${code}`);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            // Handle cases where the server is up but returns an error status.
            throw new Error(`API returned status: ${response.status}`);
        }

        // The API returns the message as plain text, so we use `.text()`.
        const message = await response.text();
        
        // Return the fetched message.
        return message;
        
    } catch (error) {
        // This `catch` block handles network errors (e.g., the API server is down)
        // or any errors thrown in the `try` block.
        console.error("Error fetching message from API:", error);
        return "Unknown Error Code — 'Seriously, what is this?' 🤷‍♀️";
    }
};