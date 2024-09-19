it('Assignment', () => {
    cy.visit('https://iodinesoftware.com/');
    
    // Open the menu and navigate to the Careers page
    cy.get('.hamburger-box').click();
    cy.get('.drop-down-arrow').eq(5).click();
    cy.get('#menu-item-4069 > a').invoke('removeAttr', 'target').click();
    
    // Alias the iframe for reuse
    cy.get('#gnewtonIframe').as('iframe');

    // Access and interact with the iframe
    cy.get('@iframe')
        .iframe() // Custom command to get iframe body
        .find('a[href="https://recruitingbypaycor.com/career/JobIntroduction.action?clientId=8a7883d077926ee10177975a28d104f6&id=8a7883a88f5ae663018fa1af2a4c1428&source=&lang=en"]')
        .should('be.visible')
        .click();
    // Break the chain to handle potential re-rendering
    cy.wait(2000)
    cy.get('@iframe')
        .iframe()
        .contains('Apply for this Position')
        .should('exist')   // Check if element exists
        .and('be.visible') // Ensure it is visible
        .click();
    cy.wait(2000)
    // Fill in the form inside the iframe
    cy.get('@iframe')
        .iframe()
        .find('input.gnewtonRequired')
        .eq(1)
        .should('be.visible')
        .click()
        .type("Musa Umer", { force: true });

    // Ensure last name field is visible and empty before interacting
    cy.get('@iframe')
        .iframe()
        .find('#lastName')
        .should('be.visible')
        .should('be.empty');

    // Upload a file
    cy.get('@iframe')
        .iframe()
        .find('#resumeDropLocalFile')
        .click()
        .selectFile('/Users/dev/Downloads/username.csv');

    cy.get('@iframe')
    .iframe()
    .find('#gnewton_section_80_question_10_answer')
    .select('Yes')
    



    });
