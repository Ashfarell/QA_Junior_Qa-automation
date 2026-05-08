class QueryingPage {
  campoNome() {
    return '#inputName';
  }
  campoEmail() {
    return '#inputEmail';
  }

  //Método para preencher campo nome usando CC + PO
  preencherNome(nome) {
    cy.preencherEValidar(this.campoNome(), nome);
  }

  //Método para preencher campo nome + email usando CC + PO
  preencherNomeEmail(nome, email) {
    cy.preencherEValidar(this.campoNome(), nome);
    cy.preencherEValidar(this.campoEmail(), email);
  }
}
export default new QueryingPage();
