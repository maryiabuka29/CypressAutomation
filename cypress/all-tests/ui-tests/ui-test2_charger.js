import Chance from 'chance'

describe('Google search', () => {
 it('Positive: Search Charger', () => {

    cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
    cy.get('[aria-label="Search the Google store"]').click()
    cy.get('input[placeholder="Search Google Store"]').type(`Google 30W USB-C Charger{enter}`)
    cy.get('a[href="/product/usb_c_30w_charger"]').should('exist')
  })
  
  })