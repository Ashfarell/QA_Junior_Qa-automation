import queryingPage from '../pages/queryingPage';

describe('Fluxo de navegação', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
    cy.acessarMenu('Commands', 'Querying'); //CC/ PARÂMETRO
  });

  it('Usuário navega usando Custom Command', () => {
    

    cy.url().should('include', '/querying');
    cy.get('h1').should('contain', 'Querying');

    //Fixuture + CC + PO p/ preencher campo nome

    // cy.fixture('example').then((dados) => {
    //   // cy.preencherEValidar('#inputName', dados.nome);   //CC antigo
    //   cy.preencherEValidar(queryingPage.campoNome(), dados.nome); //CC + PAGE OBJECTS
    // });

    // INPUT
    // cy.preencherEValidar('#inputName', 'Teste QA'); //CC/ PARÂMETRO - campo já foi preenchdio, mas CC limpa campo antes

    cy.get('#inputEmail').should('be.visible');

    //Fixuture + CC + PO p/ preencher campo EMAIL
    // cy.fixture('example').then((dados) => {
    //   cy.preencherEValidar(queryingPage.campoEmail(), dados.email); //CC/ PARÂMETRO
    // });

    // Fixutre + CC + PO p/ preencher NOME + Email juntos  -Substituído por Método (PO) p/ preencher nome + email juntos
    // cy.fixture('example').then((dados) => {
    //   cy.preencherEValidar(queryingPage.campoEmail(), dados.email);
    //   cy.preencherEValidar(queryingPage.campoNome(), dados.nome); //CC/ PARÂMETRO
    // });

    //Método (PO) p/ preencher nome + email juntos
    cy.fixture('example').then((dados) => {
      queryingPage.preencherNomeEmail(dados.nome, dados.email); //CC + PO
    });

    // cy.get('#inputEmail').type('teste@gmail').clear(); //Substituído por CC
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
