#cypress-axe-example

This repository features a basic react application with a some accessibility issues that can be surfaced with `cypress` and `cypress-axe`. It serves as sample to showcase the capabilities of automated accessibility testing.

## Start the project

To start the project run the following:

- `yarn` to install the dependencies
- `yarn start` to start the app

## Run the sample accessibility test

- run `yarn test`
- cypress GUI should appear on your screen prompting you to select a test
- select `accessibility.spec.js`
- the test will run and should output an accessibility violation
