# Module 03: Debugging Tests

## Overview
Even with AI, tests will sometimes fail. Knowing how to debug efficiently in VS Code is a critical skill.

## Objectives
- Run a test in "Debug Mode".
- Set breakpoints.
- Inspect the browser state during a test run.

## Exercise
1. Open `tests/module-03/exercise.spec.ts`.
2. This test performs a multi-step journey but fails at step 5.
3. **Do not fix it yet.**

### Step 1: Run in Debug Mode (Headless)
Since we are in a Dev Container, the browser runs in **headless mode** (invisible). You won't see a browser window pop up, but you can still debug!

1. In VS Code, open the **Testing** sidebar (beaker icon).
2. Expand the `tests` folder to find `Module 03: Debugging`.
3. Right-click the test and select **Debug Test**.

### Step 2: Setting Breakpoints
1. Open the test file `tests/module-03/exercise.spec.ts`.
2. Locate step 5 (the "Privacy Polllicy" click).
3. Click in the left margin (gutter) next to the line number to set a red dot (breakpoint).
4. Run "Debug Test" again.
5. The execution will pause at the dot.
6. Hover over variables to inspect them, or look at the **Run and Debug** sidebar to see the call stack.
7. Use the floating toolbar to **Step Over (F10)** and see the failure happen.

### Step 3: Fixing with AI
1. Once you identify the typo in the locator text.
2. Fix it manually or ask Copilot: "Fix the typo in this locator to match the actual link text 'Privacy Policy'".
3. Rerun the test to ensure it passes.
