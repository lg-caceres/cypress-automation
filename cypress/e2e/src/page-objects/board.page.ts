/// <reference types="cypress" />
import { BaseObject } from "../base-object.page";
class BoardPageSelectors extends BaseObject {
  // Add client sideboard selectors
  static nameInput = '[data-cy="name-input"]';
  static addClientButton = "Add client";
  static accountOwnerDropdown = '[data-cy="account-owner-autocomplete"]';
  static noteTextArea = '[data-cy="notes-textarea"]';
  static submitButton = '[data-cy="side-drawer-submit-button"]';
}

class BoardPage extends BaseObject {
  addClient(name: string, accountOwner: string, notes: string) {
    cy.contains("span", BoardPageSelectors.addClientButton).click();
    cy.get(BoardPageSelectors.nameInput).type(name);
    cy.get(BoardPageSelectors.accountOwnerDropdown).type(accountOwner);
    cy.contains("label", accountOwner).click();
    cy.get(BoardPageSelectors.noteTextArea).type(notes);
    cy.get(BoardPageSelectors.submitButton).click();
  }
}

export { BoardPage, BoardPageSelectors };
