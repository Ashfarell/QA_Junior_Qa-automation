//CC simples p/ acessar Página
Cypress.Commands.add('acessarQuerying', () => {
  cy.contains('Commands').click();
  cy.contains('Querying').click();
});

// CC com PARÂMETRO p/ acessar Página
Cypress.Commands.add('acessarMenu', (menu, opcao) => {
  cy.contains(menu).click();
  cy.contains(opcao).click();
});

//CC p/ preencher campo nome c/ PARÂMETRO
Cypress.Commands.add('preencherCampo', (seletor, texto) => {
  cy.get(seletor).type(texto);
});

Cypress.Commands.add('preencherEValidar', (seletor, texto) => {
  cy.get(seletor).clear().type(texto).should('have.value', texto);
});
