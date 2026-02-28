/**
In automation testing, API calls sometimes fail due to network issues. 
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() 
(40% chance of success: randomValue > 0.6). 
Log each attempt and print the final result.

**/

// Input
const MAX_ATTEMPTS = 5;

let attempt = 0;
let isSuccess = false;

do {
    attempt++;

    // Simulate API call (40% success rate)
    const randomValue = Math.random();
    console.log(`Attempt ${attempt} - Random Value: ${randomValue.toFixed(2)}`);

    if (randomValue > 0.6) {
        isSuccess = true;
        console.log(`Attempt ${attempt}: ✅ API Call Successful`);
    } else {
        console.log(`Attempt ${attempt}: ❌ API Call Failed`);
    }

} while (!isSuccess && attempt < MAX_ATTEMPTS);

// Final Result
console.log("\n===== FINAL RESULT =====");

if (isSuccess) {
    console.log(`API call succeeded after ${attempt} attempt(s).`);
} else {
    console.log(`API call failed after ${MAX_ATTEMPTS} attempts. Max retries reached.`);
}