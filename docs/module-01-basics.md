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

## Exercise
1. Open `tests/module-01/exercise.spec.ts`.
2. Locate the `test` block.
3. You will see a comment instructing you to navigate to the DHCW homepage.
4. Place your cursor on the new line after the comment.
5. Wait for Copilot to suggest `await page.goto('/');` or similar.
6. Press `Tab` to accept.
7. Run the test using the VS Code Playwright extension or `npx playwright test`.
