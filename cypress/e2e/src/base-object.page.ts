export class BaseObject {
  constructor() {
    // Define common locators or elements here
  }
  clickSettings() {
    // Common action to click the logout button
    cy.contains("span", "Settings").click();
  }
}
