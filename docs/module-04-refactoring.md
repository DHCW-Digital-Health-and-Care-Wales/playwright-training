# Module 04: Refactoring with Copilot

## Overview
We often inherit "messy" legacy code. Copilot is excellent at refactoring and cleaning up code, converting XPaths to `getByRole`, and removing hard waits.

## Objectives
- Identify bad practices (hard waits, brittle selectors).
- Use Copilot `/fix` and `/refactor` commands.
- Convert a script to a Page Object Model (POM).

## Exercise
1. Open `tests/module-04/legacy-test.spec.ts`.
2. Observe the bad practices: `page.waitForTimeout(5000)`, `page.locator('xpath=...')`.
3. Select the entire test body.
4. Right-click > "Copilot" > "Start Inline Chat" (or `Ctrl+I`).
5. Type: "Refactor this test to use Playwright best practices, remove hard waits, and use getByRole where possible."
6. Review the changes.
7. **Advanced**: Ask Copilot to "Extract this logic into a Page Object Model class."

## Warning
Always verify that the refactored code still passes the test! AI can sometimes "hallucinate" locators that don't exist.
