# DHCW Playwright & Copilot Training Environment

This repository is a training ground for Digital Health and Care Wales (DHCW) Test Engineers to master **Playwright** automation with the assistance of **GitHub Copilot**.

## Getting Started

### 1. Launch Codespace or Dev Container
This project is configured with a `.devcontainer`.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/dhcw/playwright-training/?quickstart=1)

**Note:** On the first launch, the Codespace environment can take 5+ minutes to be fully initialized as it downloads and installs the tools, web browser engines, etc. Subsequent launches will be faster.

- **VS Code**: Reopen in Container.
- **GitHub**: Open in Codespaces.

Wait for the terminal to show:
`👋 Welcome to Codespaces! You are on a custom image defined in your devcontainer.json file.`

### 2. Verify Installation
Open a terminal (Ctrl+`) and run:
```bash
npx playwright test
```

Expected output:
```bash
Running 4 tests using 1 worker
  4 passed (19.2s)
```
(Note: The number of tests passed may vary depending on how many exercises you have completed. Module 04 should pass out of the box).

## Curriculum

The training is broken down into modules found in the `/docs` directory.

- **[Module 01: Basics](/docs/module-01-basics.md)** - Setting up and your first AI-generated test.
- **[Module 02: Locators](/docs/module-02-locators.md)** - Using Copilot Chat to find robust `getByRole` selectors.
- **[Module 03: Debugging](/docs/module-03-debugging.md)** - Debugging tests in VS Code.
- **[Module 04: Refactoring](/docs/module-04-refactoring.md)** - Cleaning up legacy code with AI.

## Workflow

1.  Read the module documentation in `/docs`.
2.  Open the corresponding test file in `/tests`.
3.  Follow the instructions in the comments to use Copilot to generate code.
4.  Run the test to verify: `npx playwright test tests/module-XX`
5.  View the report: `npx playwright show-report`

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
