class AcessoSiteTricentis {

  visitarSite() {
    cy.visit(`${Cypress.config().baseUrl}`);
  }


}

export default new AcessoSiteTricentis();
