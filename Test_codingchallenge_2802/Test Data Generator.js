
// Global counter (var - function/global scoped)
var userCounter = 0;

// Fixed configuration (const - cannot change)
const TOTAL_USERS = 8;
const DOMAIN = "testingacademy.com";
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 1; i <= TOTAL_USERS; i++) {

    userCounter++;

    // Generate padded ID (USR-0001 format)
    let paddedNumber = userCounter.toString().padStart(4, "0");
    let userId = `USR-${paddedNumber}`;

    // Generate name & email
    let name = `TestUser_${i}`;
    let email = `testuser${i}@${DOMAIN}`;

    // Cycle roles using modulo
    let role = ROLES[(i - 1) % ROLES.length];

    // Every 3rd user inactive (edge case testing)
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    // Print output
    console.log(`${userId} | ${name} | ${email} | ${role} | ${status}`);
}