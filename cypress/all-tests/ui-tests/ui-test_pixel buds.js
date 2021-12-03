import Chance from 'chance'

describe('Google search', () => {
 it('Positive: Search Pixel Buds', () => {

    cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
    cy.get('[aria-label="Search the Google store"]').click()
    cy.get('input[placeholder="Search Google Store"]').type(`Google Pixel Buds A-Series{enter}`)
    cy.get('a[href="/product/pixel_buds_a_series"]').should('exist')
  })
  
  })
