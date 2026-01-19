# Module 03: Debugging Tests

## Overview
Even with AI, tests will sometimes fail. Knowing how to debug efficiently in VS Code is a critical skill.

## Objectives
- Run a test in "Debug Mode".
- Set breakpoints.
- Inspect the browser state during a test run.

## Exercise
1. Open `tests/module-03/exercise.spec.ts`.
2. This test contains a bug (it tries to click a non-existent button).
3. **Do not fix it yet.**

### Step 1: Run in Debug Mode
1. In VS Code, open the **Testing** sidebar (beaker icon).
2. Expand the `tests` folder to find `Module 03: Debugging`.
3. Right-click the test and select **Debug Test**.
4. A browser window will open. The test will pause if you have breakpoints, or run until failure.

### Step 2: Setting Breakpoints
1. Click to the left of line number 8 (`await page.getByRole...`) to set a red dot (breakpoint).
2. Right-click > **Debug Test** again.
3. The test will pause at your breakpoint.
4. Use the floating debug toolbar to "Step Over" (`F10`) or "Continue" (`F5`).

### Step 3: Fixing with AI
1. Once you confirm the failure, remove the bad line.
2. Ask Copilot Chat: "How do I click the 'Search' toggle button using a visible locator?"
3. Replace the broken code with the working code.
