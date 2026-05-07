it('Valida comportamento com campo vazio', () => {
  cy.visit('https://example.cypress.io');

  cy.contains('Commands').click();
  cy.contains('Querying').click();

  cy.get('#inputName').should('have.value', '');

  // Tenta interagir sem preencher (simulação)
  cy.get('#inputName').focus().blur();

  //continua vazio
  cy.get('#inputName').should('have.value', '');
});
