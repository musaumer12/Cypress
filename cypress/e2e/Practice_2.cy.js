it('Practice_2', ()=> {

    cy.visit('https://app.chowmill.com/')
    cy.get('[name="addressLine"]').type('2762 baton rogue')
    cy.get('[class="suggestion-item"]').eq(0).click()
    cy.wait(2000);
    cy.get('[type="submit"]').click()
    cy.wait(2000)
    cy.get('div.individual-restaurant-card-img-marketplace').should('be.visible')
    .eq(0).click()
    cy.wait(2000)
    cy.get('.card-item-img').should('be.visible')
    .eq(0).click()
    cy.get('#88462').click()
    cy.get('#buybutton123').click()

    // let items = 
    // if (items == 'Bihari Kabab')
    // {
    //     cy.items.click();
        
    // }
    // else
    // {
    //     console.log('Could not find the Item');
    // }

})