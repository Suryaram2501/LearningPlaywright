/**
 * As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
 */

// Input
const bugTitle = "Checkout page crashes on applying coupon";
const frequency = "always";
const impact = "blocker";

let severity;
let description;

// Nested if-else classification
if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0";
        description = "Critical: Stop release immediately";
    } else if (impact === "major") {
        severity = "P1";
        description = "High: Fix in current sprint";
    } else if (impact === "minor") {
        severity = "P2";
        description = "Medium: Fix soon";
    }

} else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1";
        description = "High: Needs urgent attention";
    } else if (impact === "major") {
        severity = "P2";
        description = "Medium: Fix in upcoming release";
    } else if (impact === "minor") {
        severity = "P3";
        description = "Low: Monitor and fix later";
    }

} else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2";
        description = "Medium: Investigate before release";
    } else if (impact === "major") {
        severity = "P3";
        description = "Low: Can be deferred";
    } else if (impact === "minor") {
        severity = "P4";
        description = "Very Low: Cosmetic or edge case";
    }

}

// Print Bug Report
console.log(`Bug Title: ${bugTitle}`);
console.log(`Frequency: ${frequency}`);
console.log(`Impact: ${impact}`);
console.log(`Severity: ${severity} - ${description}`);