# Module 05: Build Your Own Test

## Overview
So far, you have worked with existing code or skeletons. Now, it's time to use Copilot to generate a completely new test file from scratch.

## Objectives
- Use Copilot Chat to scaffold a new test file.
- Target a website of your choice (e.g., Google, Bing, or a non-production DHCW site).
- Define a user journey in natural language.

## Exercise

1. Open the **Copilot Chat** view (`Ctrl + Alt + I` on Windows/Linux or `Cmd + Ctrl + I` on Mac).
2. You do **not** need to open a file. You can do this from anywhere.
3. Craft a prompt that instructs Copilot to create a new file with specific steps.

### Prompt Template

Copy and modify the following prompt:

> "Create a new Playwright test file named `tests/module-05/my-test.spec.ts`. The test should:
> 1. Navigate to 'https://www.google.co.uk'.
> 2. Accept cookies if a popup appears (check for a button with text 'Accept all' or similar).
> 3. Search for 'Playwright automation'.
> 4. Verify that the results page contains the text 'Fast and reliable end-to-end testing'."

### Steps
1. Paste your modified prompt into Copilot Chat.
2. Copilot will generate the code and often a "Create File" button or a code block with a filename.
3. Click **"Create"** or **"Insert into new file"** if available. If not, create the file manually and paste the code.
4. Run your new test:
   ```bash
   npx playwright test tests/module-05/my-test.spec.ts
   ```

## Tips
- Be explicit about the filename and path.
- Mention specific "Accept Cookie" flows, as public sites often have them.
- If the test fails, use the debugging skills from Module 03!
