# Module 01: Basics & The AI Pair Programmer

## Overview
Welcome to the DHCW Automation Training. This module introduces you to Playwright and your new AI assistant: GitHub Copilot.

## Objectives
- Set up and run a basic Playwright test.
- Understand how Copilot "Ghost Text" works.
- Use Copilot to complete simple code blocks.

## Setup
Ensure you have the environment running (you should be reading this in Codespaces or a Dev Container).
Open the file `tests/module-01/exercise.spec.ts`.

## The AI Pair Programmer
Copilot suggests code as you type. This is often called "Ghost Text".
- **Accept**: Press `Tab`.
- **Dismiss**: Press `Esc`.
- **Next Suggestion**: `Alt + ]` (Windows/Linux) or `Option + ]` (Mac).

## Exercise 1: Basic Navigation
1. Open `tests/module-01/exercise.spec.ts`.
2. Locate the first test block.
3. You will see a comment instructing you to navigate to the DHCW homepage.
4. Place your cursor on the new line after the comment.
5. Wait for Copilot to suggest `await page.goto('/');` or similar.
6. Press `Tab` to accept.
7. Run the test:
   ```bash
   npx playwright test tests/module-01
   ```
8. View the report:
   ```bash
   npx playwright show-report
   ```
   (Press `Ctrl+C` in the terminal to stop the report server).

## Exercise 2: Breaking and Fixing
1. Change the title expectation to something incorrect, e.g., expect "Digital Mechanics and Care Wales".
2. Run the test again and observe the failure in the terminal and report.
3. Revert the change to fix the test.

## Exercise 3: Independent Checks
1. Add a new check (assertion) to the test.
2. Example: Verify the page footer contains "Privacy Policy".
3. Example: Check for a link to "Job Vacancies" (Note: URL is `/join-our-team/job-vacancies/`).
4. Rely on Copilot to generate the code, but verify the URLs and text match the live site.

## Further Reading
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Running Tests](https://playwright.dev/docs/running-tests)
