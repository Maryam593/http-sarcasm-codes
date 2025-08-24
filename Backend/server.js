import express from 'express';
import fs from 'fs';

const ExcuseAPI = express();
let excuse = {}; // Initialize excuse as an empty object

try {
    const fileData = fs.readFileSync('errorCodes.json', 'utf8');
    excuse = JSON.parse(fileData);
    console.log('Error codes loaded successfully!');
} catch (error) {
    console.error('Error: Could not load or parse "errorCodes.json".');
    console.error(error.message);
    process.exit(1); // Exit the process with an error code
}

// Now, define the route. This code will only run if the file was loaded successfully.
ExcuseAPI.get('/error/:code', (req, res) => {
    const code = req.params.code;
    const message = excuse[code] || "Unknown error code.";

    const statusCode = Number(code);

    // If a valid code is found, set the response status to that code.
    // Otherwise, default to 404 Not Found.
    if (excuse[code] && !isNaN(statusCode)) {
        res.status(statusCode).send(message);
    } else {
        // For codes that don't exist in your data, send a 404
        res.status(404).send("Not Found — 'Like your favorite pen… gone forever.'");
    }
});

// Start the server
ExcuseAPI.listen(3000, () => {
    console.log('Excuse API is running on http://localhost:3000');
});