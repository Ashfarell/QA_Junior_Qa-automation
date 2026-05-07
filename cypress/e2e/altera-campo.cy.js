describe('Fluxo de navegação', () => {
  it('Usuário altera valor do input', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('Commands').click();
    cy.contains('Querying').click();

    cy.get('#inputName').type('Valor antigo').should('have.value', 'Valor antigo');

    cy.get('#inputName').clear().type('Valor novo').should('have.value', 'Valor novo');
  });
});
