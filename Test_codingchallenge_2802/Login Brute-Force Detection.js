/**
 * Write a JavaScript program that simulates a login system with
 *  brute-force detection. The system should lock the account
 *  after 3 consecutive failed attempts. Use a do...while loop 
 * to process login attempts from an array. Demonstrate var 
 * (global counter), let (loop variables), and const 
 * (credentials and threshold). Validate using strict equality
 *  (===) and logical operators (&&).
 */

// Global strike counter (var - global scoped)
var strikeCount = 0;

// Fixed credentials & threshold (const)
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

// Simulated login attempts (password attempts only for simplicity)
const attempts = ["wrong", "wrong", "wrong", "Test@1234"];

let index = 0;          // loop variable (let)
let isLocked = false;   // account lock status

do {

    let enteredPassword = attempts[index];  // loop-scoped variable

    // If account already locked
    if (isLocked === true) {
        console.log(`Attempt ${index + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    } 
    else if (VALID_EMAIL === "admin@testingacademy.com" && enteredPassword === VALID_PASSWORD) {
        console.log(`Attempt ${index + 1}: ✅ LOGIN SUCCESSFUL`);
        break; // Stop after successful login
    } 
    else {
        strikeCount++;
        console.log(`Attempt ${index + 1}: ❌ FAILED - Strike ${strikeCount}/${MAX_ATTEMPTS}`);

        if (strikeCount === MAX_ATTEMPTS) {
            isLocked = true;
            console.log(`🚨 ACCOUNT LOCKED`);
        }
    }

    index++;

} while (index < attempts.length);