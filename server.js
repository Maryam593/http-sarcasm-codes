import express from 'express';
import fs from "fs"
const ExcuseAPI = express();

const excuse = JSON.parse(fs.readFileSync("errorCodes.json"))

ExcuseAPI.get('/error/:code', (req, res) => {
    const code = req.params.code;
    const message = excuse[code] || "Unknown error code.";
    res.send(message);
});

ExcuseAPI.listen(3000, () => {
    console.log("Excuse API is running on http://localhost:3000");
});
