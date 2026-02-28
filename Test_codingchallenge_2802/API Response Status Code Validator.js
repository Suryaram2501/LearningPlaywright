/**Scanrio
 * As an SDET, you receive an API response status code and need to classify it. Write a JavaScript program using a switch statement that takes an HTTP status code stored in a variable and prints the category and a QA-friendly message.

- 200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"
Input statusCode = 401
**/
// Input
const statusCode = 401;

let message;

switch (statusCode) {
    case 200:
        message = "PASS - OK: Request successful";
        break;

    case 201:
        message = "PASS - Created: Resource created successfully";
        break;

    case 400:
        message = "FAIL - Bad Request: Check request payload";
        break;

    case 401:
        message = "FAIL - Unauthorized: Check auth token";
        break;

    case 404:
        message = "FAIL - Not Found: Check endpoint URL";
        break;

    default:
        message = "UNKNOWN - Unhandled status code";
}

// Print Result
console.log("Status Code:", statusCode);
console.log("Result:", message);