// Input
const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

// Counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Loop through results
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}

// Total tests
const totalTests = testResults.length;

// Pass rate calculation (excluding skipped tests is common in QA metrics)
// If you want including skipped, use totalTests instead.
const passRate = ((passCount / totalTests) * 100).toFixed(2);

// Verdict Logic
let verdict;

if (failCount === 0) {
    verdict = "READY FOR RELEASE";
} else if (failCount <= 2) {
    verdict = "REVIEW REQUIRED";
} else {
    verdict = "BLOCK RELEASE";
}

// Test Report
console.log("===== TEST EXECUTION REPORT =====");
console.log("Total Tests      :", totalTests);
console.log("Passed           :", passCount);
console.log("Failed           :", failCount);
console.log("Skipped          :", skipCount);
console.log("Pass Rate        :", passRate + "%");
console.log("Final Verdict    :", verdict);