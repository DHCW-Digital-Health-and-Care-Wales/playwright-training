# Module 02: AI-Assisted Locators & Actions

## Overview
Finding the right locator is often the hardest part of automation. Copilot Chat can inspect your code and context to suggest robust locators, specifically `getByRole`.

## Objectives
- Use Copilot Chat to generate locators.
- Understand the preference for user-facing locators (e.g., `getByRole`, `getByText`).

## Copilot Chat
Instead of just Ghost Text, you can ask Copilot questions.
- Open the Chat view in the sidebar.
- Or use `Ctrl + I` (Windows/Linux) / `Cmd + I` (Mac) inline in the editor.

## Exercise
1. Open `tests/module-02/exercise.spec.ts`.
2. Locate the existing comment: `// Test: Search for "Modern Video Consultation" and click the first result`.
3. Press `Enter` on the following line and wait for Copilot to generate the entire test body.
4. Accept the suggestion (Tab).

## Handling Errors
You might encounter an error like:
`Error: locator.fill: Error: strict mode violation: locator('input[placeholder="Search"]') resolved to 2 elements`

This happens because there are multiple search inputs on the page (desktop and mobile).

**Task:** Use Copilot Chat to fix this.
1. Select the failing code or the error message.
2. Open Chat (`Ctrl+I`).
3. Ask: "The test fails because there are multiple search inputs. How do I target only the visible search input?"
4. Apply the fix suggestions.
