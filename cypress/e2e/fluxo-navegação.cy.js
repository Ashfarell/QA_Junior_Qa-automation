describe('Fluxo de navegação', () => {
  it('Usuário navega e interage com input', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('Commands').click();
    cy.contains('Querying').click();

    cy.url().should('include', '/querying');

    cy.get('h1').should('contain', 'Querying');

    // INPUT
    cy.get('#inputName').should('be.visible').type('Teste QA').should('have.value', 'Teste QA').clear().should('have.value', '');

    cy.get('#inputEmail').should('be.visible');
    cy.get('#inputEmail').type('teste@gmail').clear();
  });
});
