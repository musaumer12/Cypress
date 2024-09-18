

it('further_practice', ()=> {

    cy.visit('https://demo.automationtesting.in/Frames.html')

    cy.get('#singleframe')
        .iframe()
        .find('[type="text"]')
        .should('be.visible')
        .click()
        .type('Practicing I frame')
        .clear()
    cy.contains('Iframe with in an Iframe').click()

    cy.get('[src="MultipleFrames.html"]')
    .iframe()
    .find('[src="SingleFrame.html"]')
    .iframe()
    .find('[type="text"]')
    .type('nested iframe')

})