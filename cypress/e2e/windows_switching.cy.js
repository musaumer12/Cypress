it('should handle tab switching', () => {
    // Visit the initial page
    cy.visit('https://iodinesoftware.com/');
    cy.get('.hamburger-box').click()
    cy.get('.drop-down-arrow').eq(5).click()
    

    
});