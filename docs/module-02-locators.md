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
2. We need to search for "Modern Video Consultation" on the DHCW site.
3. In the test file, write a comment: `// Test: Search for "Modern Video Consultation" and click the first result`.
4. Press `Enter` and see if Copilot suggests the implementation.
5. If not, highlight the code and ask Copilot Chat: "How do I find the search input and search for 'Modern Video Consultation' using getByRole?"

## Tips
- Be specific in your prompts. "Click the button" is vague. "Click the 'Search' button" is better.
