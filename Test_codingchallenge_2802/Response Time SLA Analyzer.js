/**
 * As a performance tester, you collect API response times
 *  in milliseconds. Write a JavaScript program using a while
 *  loop that analyzes an array of response times and prints
 *  a performance report with min, max, average, and how many
 *  responses breached the SLA threshold (> 500ms). Use 
 * comparison operators for min/max tracking.
 */

// Input
const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let index = 0;
let totalRequests = responseTimes.length;

let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let sum = 0;
let breachCount = 0;

// While loop to analyze performance data
while (index < totalRequests) {

    let currentResponse = responseTimes[index];

    // Track minimum response time
    if (currentResponse < minResponse) {
        minResponse = currentResponse;
    }

    // Track maximum response time
    if (currentResponse > maxResponse) {
        maxResponse = currentResponse;
    }

    // Sum for average calculation
    sum += currentResponse;

    // Count SLA breaches
    if (currentResponse > SLA_LIMIT) {
        breachCount++;
    }

    index++;
}

// Calculate average and breach percentage
let averageResponse = (sum / totalRequests).toFixed(2);
let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

// Determine overall status
let overallStatus = breachCount > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";

// Print Performance Report
console.log("===== PERFORMANCE REPORT =====");
console.log("Total Requests:", totalRequests);
console.log("Min Response:", minResponse + "ms");
console.log("Max Response:", maxResponse + "ms");
console.log("Average Response:", averageResponse + "ms");
console.log("SLA Breaches:", breachCount + ` (${breachPercentage}%)`);
console.log("Overall Status:", overallStatus);