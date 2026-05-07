describe('Fluxo de navegação', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });

  it('Usuário navega e interage com input', () => {
    cy.contains('Commands').click();
    cy.contains('Querying').click();

    cy.url().should('include', '/querying');

    cy.get('h1').should('contain', 'Querying');

    // INPUT
    cy.get('#inputName').should('be.visible').type('Teste QA').should('have.value', 'Teste QA').clear().should('have.value', '');

    cy.get('#inputEmail').should('be.visible');
    cy.get('#inputEmail').type('teste@gmail').clear();
  });

  //Campo vazio
  it('Valida comportamento com campo vazio', () => {
    cy.contains('Commands').click();
    cy.contains('Querying').click();

    cy.get('#inputName').should('have.value', '');

    // Tenta interagir sem preencher (simulação)
    cy.get('#inputName').focus().blur();

    //continua vazio
    cy.get('#inputName').should('have.value', '');
  });
  //Altera input
  it('Usuário altera valor do input', () => {
    cy.contains('Commands').click();
    cy.contains('Querying').click();

    cy.get('#inputName').type('Valor antigo').should('have.value', 'Valor antigo');

    cy.get('#inputName').clear().type('Valor novo').should('have.value', 'Valor novo');
  });
});
