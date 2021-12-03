import Chance from 'chance'
import SearchResultsPage from "../../page-objects/searchResultsPage"
import AccessoriesPage from "../../page-objects/accessoriesPage"


/*describe('Google search', () => {
 it('Positive: Create user', () => {

    cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
    cy.get('[aria-label="Search the Google store"]').click()
    cy.get('input[placeholder="Search Google Store"]').type(`Google Pixel Buds A-Series{enter}`)
    cy.get('a[href="/product/pixel_buds_a_series"]').should('exist')
  })
  
  })*/

  describe('Google search', () => {
    it('Positive: Search for Pixel Buds', () => {
      cy.log("GIVEN User is at AccessoriesPage")
      AccessoriesPage.open()

      cy.log("WHEN User perform search product by name")
      AccessoriesPage.performSearch('Google Pixel Buds A-Series')
      SearchResultsPage.getProductByDocId('pixel_buds_a_series')
     .should('exist')
   
       //cy.get('[aria-label="Search the Google store"]').click()
       //cy.get('input[placeholder="Search Google Store"]').type(`Google Pixel Buds A-Series{enter}`)
       //cy.get('a[href="/product/pixel_buds_a_series"]').should('exist')
     })
     
     })
   