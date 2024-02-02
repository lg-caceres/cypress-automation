/// <reference types="cypress" />
import {BaseObject} from '../base-object.page';
// import {} from 'cypress-selectors'
class BoardPageSelectors extends BaseObject {
    // Add client side board selectors
    static nameInput = '[data-cy="name-input"]';
    static addClientButton = 'Add client';
}



class BoardPage extends BaseObject {
    addClient(name:string,accountOwner:string,notes:string) { 
    cy.contains('span',BoardPageSelectors.addClientButton).click();
    cy.get(BoardPageSelectors.nameInput).type('name');
    }
}

export {BoardPage, BoardPageSelectors} ;