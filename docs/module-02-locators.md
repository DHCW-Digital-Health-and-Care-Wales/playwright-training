# Module 02: AI-Assisted Locators & Actions

## Overview
Finding the right locator is often the hardest part of automation. Copilot Chat can inspect your code and context to suggest robust locators, specifically `getByRole`.

## Objectives
- Use Copilot Chat to generate locators.
- Understand the preference for user-facing locators (e.g., `getByRole`, `getByText`).

## Copilot Chat
Instead of just Ghost Text, you can ask Copilot questions.
- Open the Chat view in the sidebar (`Ctrl + Alt + I` on Windows/Linux or `Cmd + Ctrl + I` on Mac).
- Or use `Ctrl + I` (Windows/Linux) / `Cmd + I` (Mac) for inline chat.

## Exercise
1. Open `tests/module-02/exercise.spec.ts`.
2. Locate the existing comment: `// Test: Search for "Modern Video Consultation" and click the first result`.
3. Press `Enter` on the following line and wait for Copilot to generate the entire test body.
4. Accept the suggestion (Tab).

## Handling Errors
The generated test might fail. For example:
- **Strict mode violation:** finding multiple elements (e.g., desktop vs mobile search inputs).
- **Timeout:** element not found or not visible.
- **Assertion error:** search results not matching.

**Task:** Use Copilot Chat to fix the test.
1. Select the failing code or the error message from the terminal.
2. Open the full Chat view (`Ctrl + Alt + I`).
3. Ask: "Run and fix this playwright test."
4. Apply the fix suggestions.
