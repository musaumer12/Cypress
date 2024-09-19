

describe('Dynamic Dropdown-Practice', () => {
    it('Dynamic Dropdown ', () => {


        cy.visit('https://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get('#selector for use').click().clear().type('JFK', {delay: 200}) // Delay command delays the time for every character entered in the field 
        cy.get('#selector for use').each(($el, index, $list) => {
            cy.log($el.text())  // it will log the elements in the cypress console 
            if($el.text() === "JFK"){
                //$el.click()  // Using only Click with "$el" will not work because it is depricated we will use cy.wrap to further use these commands 
                cy.wrap($el).click()

            }

        })

    })



})