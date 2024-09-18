 /// <reference types ="cypress" />

 it ("Google Search", () => {

    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Automation Step by step{Enter}')
    // cy.wait(20000)
    // cy.contains('Google Search').click()
    cy.contains('videos').click()

 })

