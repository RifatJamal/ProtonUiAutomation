# Go to the termainal and initialise the playwright project with the command and press enter until it starts intallation
npm init @playwright

# To run all the test in a test class where home-page.spec.ts is the name of the test method
npx playwright test home-page.spec.ts --headed

# To run a single test where TestCase1.1 is the name of the test
npx playwright test --grep TestCase1.1 --headed

# To run all the tests in the suite
npx playwright test --headed

# To view the test report
npx playwright show-report

# To debug the test
npx playwright show-report
npx playwright test --grep TestCase1.1 --debug


# good to use VSCode to open the project