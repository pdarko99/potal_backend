// Custom error classes
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

class CustomValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomValidationError";
    this.statusCode = 400;
  }
}

// Middleware to handle errors
function errorHandler(err, req, res, next) {
  // Default to a 500 status code (Internal Server Error)
  let statusCode = err.statusCode || 500;

  // Log the error
  console.error(err);

  // Provide a user-friendly error message for 500 errors
  let errorMessage = "Something went wrong. Please try again later.";

  // Handle specific error types
  if (err instanceof NotFoundError) {
    statusCode = 404;
    errorMessage = "Not found.";
  } else if (err instanceof CustomValidationError) {
    statusCode = 400;
    errorMessage = err.message;
  }

  // Return the error response to the client
  res.status(statusCode).json({ error: errorMessage });
}

export { errorHandler, CustomValidationError, NotFoundError };
