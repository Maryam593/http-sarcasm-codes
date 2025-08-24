// Sarcastic HTTP Status Codes Library
// Inspired by Wikipedia's full list of HTTP status codes

export const errorCodes = {
   
};
export const getErrorMessage = (code) => {
    return errorCodes[code] || "Unknown Error Code — 'Seriously, what is this?' 🤷‍♀️";
};