describe('Test fors] reqres', () => {
    before(() => {
     // cy.visit('https://example.cypress.io/commands/actions')
    })
  
    // https://on.cypress.io/interacting-with-elements
    it ('Create user', () => {
        cy.request('POST', 'api/users', {
        "name":"morpheus123456",
        "job": "leader065405640",
        "id": "529",
        "createdAt": "2021-10-23T11:01:31.274Z"
        })
    })
})