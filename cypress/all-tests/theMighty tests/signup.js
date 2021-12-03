describe('Signup to the Mighty', () => {
    it('Positive: Signup', () => {
   
       cy.visit('https://dev.themighty.info')
       cy.contains('Explore').click ()
       cy.get('.search-bar').type ('Anxiety{enter}')
       cy.get('.navigation>:nth-child(2)').click()
       cy.get('.navigation>:nth-child(3)').click()
       cy.get('.navigation>:nth-child(4)').click()
       cy.get('.navigation>:nth-child(5)').click()
       //cy.get('.navigation>:nth-child(5)').click()
       //cy.get('a[href="/#explore"]'). click({multiple:true})
       //cy.get('[id="join-us-btn"]').click()
       //cy.get('a[href="/product/usb_c_30w_charger"]').should('exist')
     })
     
     })