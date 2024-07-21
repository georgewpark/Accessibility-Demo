# Accessibility Audit Demo

This site has been created as part of a technical talk and contains accessibility issues to demonstrate how to perform an accessibility review to identify these issues and determine appropriate fixes:

- Axe Pro Automatic Testing & Guided Tests
- Visual Checks
- Keyboard-Only Testing
- Screen Reader Testing

## Live Demo

A live demo is available on [Netlify](https://eqtr-accessibility-demo.netlify.app/).

## Project Setup

From the root directory, install project dependencies by running `npm install` from the terminal.

Build the files and start the local dev server by running `npm run dev` from the terminal. This should open the dev site automatically at http://localhost:3000/.

You can build the files without starting the dev server by running `npm run build` from the terminal to compile the development build or `npm run prod` to compile the production build.

## Playwright

Playwright is used to perform automated accessibility testing with the Axe Core API.

From the root directory, begin the accessibility audit by running `npm run test` from the terminal.

This will start the dev server automatically and scan the page for accessibility issues.

A report will be generated and if any accessibility issues are identified then the report will be automatically opened.

The report can be viewed at any time by running `npm run test-report` or when running the dev server by accessing the page directly at `/playwright-report` which an example is available to view on the [demo site](https://eqtr-accessibility-demo.netlify.app/playwright-report/).
