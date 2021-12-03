describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('https://example.cypress.io') 

        cy.contains ('type').click()

        //Should be on a new URL wich includes '/commands/acrions'
        cy.url().should('include', '/commands/actions')

        //Get an imput, type into it and verify that the value has been updated
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})