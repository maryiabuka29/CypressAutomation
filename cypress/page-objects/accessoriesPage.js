import SearResultsPage from './searchResultsPage'

class AccessoriesPage {
    open() {
        cy.visit (`${Cypress.env('googleURL')}/collection/accessories_wall?hl=en-US`);
    }

    get searchIcon() {
        return cy.get('[aria-label="Search the Google store"]');
    }

    get searchInput () {
        return cy.get('input[placeholder="Search Google Store"]');
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch} {enter}`);
    }
}

export default new AccessoriesPage(0)