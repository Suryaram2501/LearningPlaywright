/**
 * Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.
 * 
 */
/**********************
 MINI TEST SUITE RUNNER
**********************/

// Global counters (var)
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// Test cases (const - fixed data)
const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "String loose equality", actual: "10", expected: 10, type: "looseEqual" },
    { name: "Type check number", actual: 500, expected: "number", type: "typeCheck" },
    { name: "Truthy validation", actual: "QA", expected: null, type: "truthy" },
    { name: "Response time < 300", actual: 350, expected: 300, type: "lessThan" }
];

const totalTests = testCases.length;
let results = []; // store individual results

console.log("===== EXECUTING TEST SUITE =====\n");

// Execute test cases (for loop)
for (let i = 0; i < totalTests; i++) {

    const tc = testCases[i];
    let status;
    let message;

    try {

        switch (tc.type) {

            case "strictEqual":
                status = (tc.actual === tc.expected);
                message = `${tc.actual} === ${tc.expected}`;
                break;

            case "looseEqual":
                status = (tc.actual == tc.expected);
                message = `${tc.actual} == ${tc.expected}`;
                break;

            case "typeCheck":
                status = (typeof tc.actual === tc.expected);
                message = `typeof ${tc.actual} === ${tc.expected}`;
                break;

            case "truthy":
                status = !!tc.actual;
                message = `Boolean(${tc.actual})`;
                break;

            case "lessThan":
                status = (tc.actual < tc.expected);
                message = `${tc.actual} < ${tc.expected}`;
                break;

            default:
                throw new Error("Unknown comparison type");
        }

        if (status === true) {
            passCount++;
            results.push("PASS");
            console.log(`✅ TC-${(i+1).toString().padStart(2,"0")}: ${tc.name} → PASS (${message})`);
        } else {
            failCount++;
            results.push("FAIL");
            console.log(`❌ TC-${(i+1).toString().padStart(2,"0")}: ${tc.name} → FAIL (${message})`);
        }

    } catch (err) {
        errorCount++;
        results.push("ERROR");
        console.log(`⚠️ TC-${(i+1).toString().padStart(2,"0")}: ${tc.name} → ERROR (${err.message ?? "Unknown error"})`);
    }
}

/*********************************
 Find Consecutive Passes (while)
*********************************/
let consecutivePasses = 0;
let index = 0;

while (index < results.length && results[index] === "PASS") {
    consecutivePasses++;
    index++;
}

/*********************************
 Find First Failure (do...while)
*********************************/
let firstFailureIndex = -1;
let j = 0;

do {
    if (results[j] === "FAIL") {
        firstFailureIndex = j;
        break;
    }
    j++;
} while (j < results.length);

/*********************************
 Summary Report
*********************************/

const passRate = ((passCount / totalTests) * 100).toFixed(2);
const overallStatus = (failCount === 0 && errorCount === 0)
    ? "✅ PASSED"
    : "❌ FAILED";

console.log("\n===== TEST SUMMARY =====");
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Consecutive Passes (from start): ${consecutivePasses}`);
console.log(`First Failure Index: ${firstFailureIndex !== -1 ? firstFailureIndex + 1 : "None"}`);
console.log(`Overall: ${overallStatus}`);