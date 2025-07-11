# Oncore Payroll Automation

This Cypress test suite automates the process of submitting your weekly payroll timesheet for all weekdays on payroll sites powered by Oncore. The suite includes a test case for adding timesheet entries for each weekday and submitting the timesheet.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [environment Variables](#environment-variables)
- [Usage](#usage)
- [Test Structure](#test-structure)
    - [Custom Commands](#custom-commands)
    - [Selectors](#selectors)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the test, ensure you have the following prerequisites installed:

* [Node.js (version 12 or higher)](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Cypress](https://www.cypress.io/) - A JavaScript end-to-end testing framework.

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Sharma-IT/oncore-payroll-automation.git
```

2. Change into the project directory:

```sh
cd oncore-payroll-automation
```
3. Install the project dependencies:

```sh
npm install cypress
```

### Environment Variables

To securely manage login credentials and configuration, this project uses environment variables stored in a `cypress.env.json` file at the root of the project. The file has the following format:

```json
{
    "username": "your-email@email.com",
    "password": "your-password",
    "oncorePayrollSite": "https://agency.oncoreservices.com/Pages/Login.aspx"
}
```

Make sure to replace `your-email@email.com` and `your-password` with your actual login credentials, and `https://agency.oncoreservices.com/Pages/Login.aspx` with the URL of your Oncore-powered payroll site. These environment variables are automatically loaded by Cypress when you run the test, ensuring secure and flexible configuration.

## Usage

To run the Cypress test in interactive mode, use the following command:

```sh
npx cypress open
```

Otherwise, if you want to use the CLI to run the test, use this command:

```sh
npx cypress run --spec cypress/e2e/timesheet-automation.cy.js
```

## Test Structure

The test suite includes a single test case: `Submit the timesheet of the current week`. Which submits the weekly timesheet for all weekdays. The test case is defined in `cypress/e2e/timesheet-automation.cy.js`.

### Custom Commands

Custom Cypress commands are defined in `cypress/support/commands.js`:

- `cy.login()`: Logs in with the provided credentials.
- `cy.addTimeSheetEntryFor(dayOfWeek)`: Adds a timesheet entry for a specific day of the week.
- `cy.submitTimesheet()`: Submits the timesheet and verifies the success message.

### Selectors

Element selectors used in the test suite are defined in `cypress/support/selectors.js`.

## Contributing

Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.

## Contact

Shubham Sharma - [My LinkedIn](https://www.linkedin.com/in/sharma-it/) - shubhamsharma.emails@gmail.com.

## License

This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details.
