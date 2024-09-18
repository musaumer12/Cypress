
// If using cypress-iframe plugin, uncomment the following line:
// import 'cypress-iframe';

it('Assignment', () => {
    // Visit the initial page
    cy.visit('https://iodinesoftware.com/careers-2/')

    cy.get('#gnewtonIframe').then(iframedata => {
        const idata = iframedata.contents().find('body')
        cy.wrap(idata).as('iframe')    

    })
    
    cy.get('@iframe').find('a[href="https://recruitingbypaycor.com/career/JobIntroduction.action?clientId=8a7883d077926ee10177975a28d104f6&id=8a7883a88f5ae663018fa1af2a4c1428&source=&lang=en"]').click()

    
    
    cy.get('@iframe').contains('Apply for this Position').click()

})

  












// it('It should be visible in ', () => {
    // cy.get('#gnewtonIframe').its('0.contentDocument.body').then(cy.wrap).click('.gnewtonCareerGroupJobTitleClass')
    // })
 

 
    // Perform actions to trigger the new tab/window
    // cy.get('.hamburger-box').click()
    // cy.get('.drop-down-arrow').eq(5).click()

    // // Intercept window.open and visit the URL directly
    // cy.window('https://iodinesoftware.com/careers-2/').then((win) => {
    //     // Stub window.open
    //     cy.stub(win, 'open').callsFake(() => {
    //         // Visit the URL directly in the same tab
    //         cy.visit('https://iodinesoftware.com/careers-2/')
    //     })

    //     // Click the link that would normally open a new tab
    //     cy.get('#menu-item-4069 > a').click()
    // })

    // Check the URL and the visibility of an element on the new page
    // cy.url().should('include', 'careers-2')  // Adjust to match the part of the URL
    // cy.get('some-element').should('be.visible')
