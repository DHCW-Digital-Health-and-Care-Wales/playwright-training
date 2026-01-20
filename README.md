# DHCW Playwright & Copilot Training Environment

This repository is a training ground for Digital Health and Care Wales
(DHCW) Test Engineers to master **Playwright** automation with the assistance
of **GitHub Copilot**.

## Getting Started

### 1. Launch Codespaces

**GitHub Codespaces** provides a complete, pre-configured development
environment (VS Code) that runs entirely in your browser. It eliminates
the need for local setup—no software installation required. With this
project's `.devcontainer` configuration, you'll get a ready-to-use
environment with Node.js, Playwright, browsers, and all dependencies
automatically installed.

To get started (this will open a new browser tab):

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/DHCW-Digital-Health-and-Care-Wales/playwright-training/?quickstart=1)

**Note:** On the first launch, the Codespace environment can take 5+ minutes
to be fully initialized as it downloads and installs the tools, web browser
engines, etc. Subsequent launches will be faster.

Wait for the terminal to show:

```bash
👋 Welcome to Codespaces! You are on a custom image defined in your devcontainer.json file.
```

### 2. Verify Installation

Open a terminal `Ctrl+'` and run:

```bash
npx playwright test
```

Expected output:
```bash
Running 4 tests using 1 worker
  1 failed
    [chromium] › tests/module-03/exercise.spec.ts:3:5 › Module 03: Debugging ───────────────────────
  3 passed (26.9s)

To open last HTML report run:

  npx playwright show-report
```

(Note: The failure in Module 03 is **expected**! The training exercise involves
debugging and fixing this specific test).

## Curriculum

The training is broken down into modules found in the `/docs` directory.

- **[Module 01: Basics](/docs/module-01-basics.md)** - Setting up and your first AI-generated test.
- **[Module 02: Locators](/docs/module-02-locators.md)** - Using Copilot Chat to find robust `getByRole` selectors.
- **[Module 03: Debugging](/docs/module-03-debugging.md)** - Debugging tests in VS Code.
- **[Module 04: Refactoring](/docs/module-04-refactoring.md)** - Cleaning up legacy code with AI.
- **[Module 05: Build Your Own](/docs/module-05-build-your-own.md)** - Generate a complete test from scratch using Copilot Chat.

## Workflow

1. Read the module documentation in `/docs` - press `CTRL-ALT-V` when in a `.md` file to see the document formatted properly.
2. Open the corresponding test file in `/tests`.
3. Follow the instructions in the comments to use Copilot to generate code.
4. Run the test to verify (in the Terminal): `npx playwright test tests/module-XX`
5. View the report (in the Terminal): `npx playwright show-report`
6. Close the report (in the Terminal): Press `CTRL-C` 

## Saving Changes

If you want to save or share your work you can ask Copilot Chat `CTRL-ALT-I` to do so:

`Create a Git branch named 'training/<name>-learning', commit all my changes and push them`

- Replace `<name>' with a name to use, such as your username.
- Copilot may ask for permission to use Git, you will need to `Allow` this.
- Your work will be saved on [GitHub.com](https://github.com/DHCW-Digital-Health-and-Care-Wales/playwright-training/branches) 

If you make futher changes you can ask Copilot to add them to your branch:

`Commit my changes and push them`

## AI Ethics & Best Practices

**Reviewing AI Code**
Copilot is a "Co-pilot", not the "Auto-pilot". You are the Pilot.
- **Verify**: Always run the code. AI can hallucinate selectors that don't exist.
- **Understand**: Do not commit code you do not understand. Ask Copilot to explain it (`/explain`).
- **Security**: Do NOT paste sensitive or real patient data into Chat. Ensure all test data is synthetic.

## Reference Guides
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Playwright Extension](https://playwright.dev/docs/getting-started-vscode)

## Coding Standards

- **Language**: TypeScript (`.ts`)
- **Locators**: Prioritise user-facing attributes (`getByRole`, `getByLabel`, `getByText`) over CSS/XPath.
- **Assertions**: Use web-first assertions (`await expect(locator).toBeVisible()`).
- **Comments**: Leave clear comments to help Copilot understand your intent.
