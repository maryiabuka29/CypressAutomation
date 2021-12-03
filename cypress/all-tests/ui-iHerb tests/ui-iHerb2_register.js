describe('iHerb sign up', () => {
    it('Positive: Enter sing up page', () => {
   
       cy.visit('https://by.iherb.com/')
       cy.get('[class="iherb-header-account single-icon"]').click()
       //cy.get('.form-row > .btn').click()
       //cy.get('[data-ga-event-label="Create Account"]').click()
      // cy.get('[data-ga-product-id="83508"]').should('exist')
     })
     
     })