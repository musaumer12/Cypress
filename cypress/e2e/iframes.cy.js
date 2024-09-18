

it('Iframe-example', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#courses-iframe').then(iframedata=> {
        const idata = iframedata.contents().find('body')
        cy.wrap(idata).as('iframe')

    })

    cy.get('@iframe').find('a[href="https://rahulshettyacademy.com/blog/"]').eq(0).click()


})