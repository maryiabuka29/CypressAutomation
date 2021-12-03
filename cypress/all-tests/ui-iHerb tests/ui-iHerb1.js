describe('iHerb search', () => {
    it('Positive: Search Nutra BioGenesis', () => {
   
       cy.visit('https://iherb.com')
       cy.get('[aria-label="Search"]').click()
       cy.get('input[aria-label="Search"]').type(`Nutra BioGenesis{enter}`)
       cy.get('[data-ga-product-id="83508"]').should('exist')
     })
     
     })