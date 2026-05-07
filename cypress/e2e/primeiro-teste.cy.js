describe('Primeiro teste', () => {
  it('Acessa e navega no site', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('Commands').click();
    // cy.get('.dropdown-menu > :nth-child(1) > a').click();    //seletor frágil
    cy.contains('Querying').click(); //seletor busca o campo c/ o nome

    cy.url().should('include', '/querying'); //check se URL contém texto

    cy.get('h1').should('contain', 'Querying'); //h1 = título principal da página

    cy.get('#get > a').should('contain', 'cy.get()');
  });
});
