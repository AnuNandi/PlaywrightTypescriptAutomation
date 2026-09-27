# Experian Employer Services – Playwright TypeScript Automation

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js (LTS version recommended)
- npm
- Git
- Visual Studio Code (recommended)

Verify the installations using:

node --version
npm --version
git --version

After cloning the repository

## Install Project Dependencies

The project dependencies are already defined in `package.json`.

Run:

npm install

This installs Playwright, TypeScript, Node.js type definitions, and all other required dependencies.

## Install Playwright Browsers

Run:

npx playwright install

This installs the browser binaries required by Playwright.

## Run the Automated Test

Run the test in headless mode:

npx playwright test

## View the HTML Test Report

After test execution, generate/view the Playwright HTML report using:

npx playwright show-report

