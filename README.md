📘 Cypress Test Automation

A complete guide to setting up Cypress end-to-end testing in your web project.
This file contains installation, folder structure, available scripts, features, and examples – all in one page.

🔧 Installation & Setup

✅ Prerequisites

Node.js (v14 or above)

npm or yarn

A modern browser (e.g., Chrome)

📥 Install Cypress

npm install cypress --save-dev

📂 Open Cypress

npx cypress open

This opens Cypress Test Runner where you can run tests interactively.

📁 Project Structure

project-root/
│
├── cypress/
│   ├── e2e/          # Test cases
│   ├── fixtures/     # Static test data (JSON)
│   ├── support/      # Commands and setup config
│
├── cypress.config.js # Cypress configuration
├── package.json      # Project metadata and scripts
├── README.md         # This file

📜 Script Commands

Command

Description

npx cypress open

Open the Cypress test runner

npx cypress run

Run all tests in headless mode

npx cypress run --browser chrome

Run tests using Chrome browser

npx cypress run --spec <file>

Run a specific test file

