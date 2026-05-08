import queryingPage from '../pages/queryingPage';

describe('Fluxo de navegação', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
    cy.acessarMenu('Commands', 'Querying');
  });

  it('Usuário navega e preenche formulário', () => {
    cy.url().should('include', '/querying');

    cy.get('h1').should('contain', 'Querying');

    cy.get('#inputEmail').should('be.visible');

    cy.fixture('example').then((dados) => {
      queryingPage.preencherNomeEmail(dados.nome, dados.email);
    });
  });

  it('Valida comportamento com campo vazio', () => {
    cy.get('#inputName').should('have.value', '');

    cy.get('#inputName').focus().blur();

    cy.get('#inputName').should('have.value', '');
  });

  it('Usuário altera valor do input', () => {
    cy.get('#inputName').type('Valor antigo').should('have.value', 'Valor antigo');

    cy.get('#inputName').clear().type('Valor novo').should('have.value', 'Valor novo');
  });
});
