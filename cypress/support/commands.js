// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-plugin-tab';

Cypress.Commands.add('iframe', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
        .its('0.contentDocument.body') // Access the iframe's body
        .should('be.visible') // Ensure the body is visible
        .and('not.be.empty') // Ensure the body is not empty
        .then(cy.wrap); // Wrap it for further Cypress commands
});
