# DHCW Playwright & Copilot Training Environment

This repository is a training ground for Digital Health and Care Wales (DHCW) Test Engineers to master **Playwright** automation with the assistance of **GitHub Copilot**.

## Getting Started

### 1. Launch Codespace or Dev Container
This project is configured with a `.devcontainer`.
- **VS Code**: Reopen in Container.
- **GitHub**: Open in Codespaces.
- The environment will automatically install Node.js (LTS), Playwright browsers, and VS Code extensions.

### 2. Verify Installation
Open a terminal (Ctrl+`) and run:
```bash
npx playwright test
```
(Some tests are empty skeletons and might be skipped or fail—this is expected! Module 04 should pass).

## Curriculum

The training is broken down into modules found in the `/docs` directory.

- **[Module 01: Basics](/docs/module-01-basics.md)** - Setting up and your first AI-generated test.
- **[Module 02: Locators](/docs/module-02-locators.md)** - Using Copilot Chat to find robust `getByRole` selectors.
- **[Module 03: Accessibility](/docs/module-03-a11y.md)** - Automated WCAG testing with `@axe-core/playwright`.
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
- **Security**: Be mindful of pasting sensitive data into Chat, though DHCW Enterprise copilot settings may mitigate this.

## Coding Standards

- **Language**: TypeScript (`.ts`)
- **Locators**: Prioritise user-facing attributes (`getByRole`, `getByLabel`, `getByText`) over CSS/XPath.
- **Assertions**: Use web-first assertions (`await expect(locator).toBeVisible()`).
- **Comments**: Leave clear comments to help Copilot understand your intent.
