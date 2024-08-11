# Playwright-typescript-page-objects
Playwright demo scripts with page object design pattern and typescript

## About Framework

This framework is using the **Page Object Model** which is built using **Playwright** with **Typescript** and **Jest**. [Playwright](https://github.com/microsoft/playwright) is a single API for automating Chromium, Firefox, and WebKit. The [page object](https://playwright.dev/docs/pom) design pattern is used to capture the HTML elements.

## Installation

To start the project on your local machine, you must first download the repository. Then, in the folder where you saved the code, run `npm install` to download all of the project's dependencies. `npm init playwright@latest` will install the various browser configurations along with Playwright.

## Configuration

Playwright Test allows you to customise the default browser, context, and page fixtures. There are options such as `headless`, `viewport`, and `ignoreHTTPSErrors`. You can also capture a `screenshot` at the end of the test or record a `video` or a `trace` for it. There are numerous testing options, such as timeout and testDir, that allow you to customise how your tests are collected and executed. Any option can be specified globally in the configuration file and most of them locally in a test file.
See the full list of [test options](https://playwright.dev/docs/api/class-testoptions) and all [configuration properties](https://playwright.dev/docs/api/class-testconfig).

## Running Tests

You have the option to perform one test, a group of tests, or all tests. One browser or a number of browsers can be used to run tests. By default, tests are performed headlessly, which means no browser tabs are opened while they are being run and results are displayed in the terminal.

`npx playwright test <test-name> --reporter=html` to run single test
`npx playwright test  --reporter=html` to run all the tests

here is the list of [command line test run options](https://playwright.dev/docs/running-tests#command-line)

When a test fails, you can have it automatically run again by using test retries. This is helpful when a test is erratic and fails from time to time. The [configuration file](https://playwright.dev/docs/test-configuration) specifies the test retries.

## Debugging

`npx playwright test --debug`

Since Playwright runs in Node.js, thus you can debug it using your preferred debugger, such as 'console.log', your IDE, or the [VS Code Extension](https://playwright.dev/docs/getting-started-vscode). Playwright comes with the [Playwright Inspector](https://playwright.dev/docs/debug#playwright-inspector) that is included with Playwright enables you to step through Playwright API calls, view their debug logs, and investigate [selectors](https://playwright.dev/docs/selectors).

## Test Execution Report

A few built-in reporters for various needs are included with Playwright Test, and it also has the option to create custom reporters. Passing the `--reporter` command line option is the simplest approach to test out built-in reporters. Allure At the conclusion of the test execution, an HTML report with a failure screenshot and scenario will be generated. For the failed test scenarios, a trace video will be attached.

To learn more about test-reporters click [here](https://playwright.dev/docs/test-reporters)
