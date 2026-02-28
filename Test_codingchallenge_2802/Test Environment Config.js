/**
 * In CI/CD pipelines, tests run against different environments.
 *  Write a JavaScript program using a switch statement that 
 * takes an environment name stored in a variable and prints 
 * the base URL, API key pattern, and timeout. Use const for 
 * fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has 
different base URL, API key prefix, timeout, and description.
 */
// Input
const envName = "staging";

// Fixed configuration values (const)
const DEV_CONFIG = {
    baseUrl: "https://dev-api.testingacademy.com",
    apiKeyPrefix: "dev_key_xxxx-xxxx",
    timeout: 5000,
    description: "Development - Internal testing environment"
};

const STAGING_CONFIG = {
    baseUrl: "https://staging-api.testingacademy.com",
    apiKeyPrefix: "stg_key_xxxx-xxxx",
    timeout: 8000,
    description: "Staging - Pre-production mirror"
};

const QA_CONFIG = {
    baseUrl: "https://qa-api.testingacademy.com",
    apiKeyPrefix: "qa_key_xxxx-xxxx",
    timeout: 7000,
    description: "QA - Dedicated testing environment"
};

const PROD_CONFIG = {
    baseUrl: "https://api.testingacademy.com",
    apiKeyPrefix: "prod_key_xxxx-xxxx",
    timeout: 10000,
    description: "Production - Live customer environment"
};

// Assembled configuration (let)
let config;

switch (envName.toLowerCase()) {

    case "dev":
        config = DEV_CONFIG;
        break;

    case "staging":
        config = STAGING_CONFIG;
        break;

    case "qa":
        config = QA_CONFIG;
        break;

    case "production":
    case "prod":
        config = PROD_CONFIG;
        break;

    default:
        console.log("Unknown environment. Please check configuration.");
        process.exit(1);
}

// Print Output
console.log(`Environment: ${envName.toUpperCase()}`);
console.log(`Base URL: ${config.baseUrl}`);
console.log(`API Key: ${config.apiKeyPrefix}`);
console.log(`Timeout: ${config.timeout}ms`);
console.log(`Description: ${config.description}`);