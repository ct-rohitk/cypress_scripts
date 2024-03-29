describe('CSV Reader Task', () => {
    it('Reads CSV & inputs data', () => {
        Cypress.on('uncaught:exception', (err, runnable) => { // returning false here prevents Cypress from failing the test
            return false
        })
        cy.visit("https://stage.matoshreemotors.in/");
        cy.get('title').invoke('text').then(text=>{
            cy.log("Page Title :",text);
        })
    });
  });