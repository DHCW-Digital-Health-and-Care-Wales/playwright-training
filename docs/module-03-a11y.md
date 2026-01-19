# Module 03: Automated Accessibility (A11y)

## Overview
Accessibility is a legal requirement for NHS services. We use `@axe-core/playwright` to scan our pages for WCAG violations.

## Objectives
- Integrate `axe-core` into a Playwright test.
- Use Copilot to generate accessibility scanning code.

## Exercise
1. Open `tests/module-03/exercise.spec.ts`.
2. We want to scan the homepage.
3. Open Copilot Chat.
4. Ask: "How do I use axe-core to scan the page for accessibility violations in this test?"
5. Review the code. It should import `InjectAxe` or `AxeBuilder`.
6. Refine your prompt if needed: "How do I scan only the main content area?"

## Validating Output
Copilot might suggest code that just logs violations. Ensure you add an assertion to fail the test if violations are found!
`expect(accessibilityScanResults.violations).toEqual([]);`
