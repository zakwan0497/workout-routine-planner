export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};


// Explanation:

// utils > error.js

// Contains utility functions for handling errors.
// Help standardizing error responses, logging errors.
// Ensuring that the application can handle errors properly.

// Centrailized Error Handling.
// Custom Error Classes. (defines custom error classes to represent different types of errors)
// Error Response Formatting. (standardize the format of error responses)
// Logging Errors. (logs errors for debugging and monitoring)