import * as selectors from './selectors';

const oncorePayrollSite = Cypress.env('oncorePayrollSite');
const username = Cypress.env('username');
const password = Cypress.env('password');

beforeEach(() => {
  cy.login();
});

Cypress.Commands.add("login", () => {
  cy.visit(oncorePayrollSite);
  cy.get(selectors.userNameInput).type(username);
  cy.get(selectors.passwordInput).type(password).type('{enter}');
});

Cypress.Commands.add("addTimeSheetEntryFor", (dayOfWeek) => {
  cy.get(selectors.timesheetPageLink).parent().invoke('css', 'visibility', 'visible').click();
  cy.get(selectors.addNewRecordButton).click();
  cy.get(selectors.unitsInput).click().type("1");
  cy.get(selectors.rateDropdown).select(/standard day/i);
  cy.get(selectors.workDatePopupButton).click();
 
  cy.get('tr.rcRow').each(($row) => {
    const dayTd = $row.find(`td[title^="${dayOfWeek}"]`);

    if (dayTd.length > 0) {
      const activeDayValue = dayTd.find('a').text();
        cy.get(`td[title^="${dayOfWeek}"] a:contains(${activeDayValue})`).click();
      }
    });

    cy.get(selectors.insertButton).click();
});

Cypress.Commands.add("submitTimesheet", () => {
  cy.get(selectors.submitButton).click();
  cy.get(selectors.successMessage).should('contain', 'The timesheet was successfully submitted');
});
