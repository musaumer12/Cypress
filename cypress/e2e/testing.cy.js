it('Assignment', () => {
    
    
    cy.visit('https://iodinesoftware.com/')
    
    cy.get('.hamburger-box').click()
    cy.get('.drop-down-arrow').eq(5).click()
    cy.get('#menu-item-4069 > a').invoke('removeAttr', 'target').click();  // used a plugin for Tab switching and Put it in comnmand.js file
    
    // cy.visit('https://iodinesoftware.com/careers-2/') // Can also be done by directly hitting the link continue the actions

    // Access and interact with the iframe
    cy.get('#gnewtonIframe')
        .iframe() // Custom command to get iframe body (Stored in command.js)
        .find('a[href="https://recruitingbypaycor.com/career/JobIntroduction.action?clientId=8a7883d077926ee10177975a28d104f6&id=8a7883a88f5ae663018fa1af2a4c1428&source=&lang=en"]')
        .should('be.visible')

        .click() 
    
    cy.wait(2000); 

    // Interact with the updated content
    cy.get('#gnewtonIframe')
        .iframe() // Custom command to get iframe body same as above (same method to be used to get all elements inside the iframe body)
        .contains('Apply for this Position') 
        .should('be.visible') 
        .click();

    cy.wait(2000);
    cy.get('#gnewtonIframe')
        .iframe()
        .find('input.gnewtonRequired')
        .eq(1)
        .should('be.visible')
        .click()
        .wait(2000) // added wait because the frame was not laoding and text was not typed in the field
        .type("Musa Umer", {force: true})

    cy.get('#gnewtonIframe')
        .iframe()
        .find('#lastName')
        .should('be.visible')
        .should('be.empty')
    cy.get('#gnewtonIframe')
    .iframe()
    .find('#resumeDropLocalFile')
    .click()
    .selectFile('/Users/dev/Downloads/username.csv') //Uploading file
    });
