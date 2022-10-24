const or = require("../fixtures/qa.json");
const user = 'input[id="input-login-user"]';
const password = 'input[id="input-login-password"]';

Cypress.Commands.add("loginLaudoRoot", () => {
  cy.get(user).type(or.env.userRoot.login);
  cy.get(password).type(or.env.userRoot.senha);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("loginLaudoAdmin", () => {
  cy.get(user).type(or.env.userAdmin.login);
  cy.get(password).type(or.env.userAdmin.senha);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("loginLaudoCreator", () => {
  cy.get(user).type(or.env.userCreator.login);
  cy.get(password).type(or.env.userCreator.senha);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("loginLaudoViewer", () => {
  cy.get(user).type(or.env.userViewer.login);
  cy.get(password).type(or.env.userViewer.senha);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("loginLaudoHomolog", () => {
  cy.get(user).type(or.env.userHomolog.login);
  cy.get(password).type(or.env.userHomolog.senha);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("loginLaudoApproval", () => {
  cy.get(user).type(or.env.userApproval.login);
  cy.get(password).type(or.env.userApproval.senha);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("loginLaudoConsultReport", () => {
  cy.get(user).type(or.env.userConsultReport.login);
  cy.get(password).type(or.env.userConsultReport.senha);
  cy.get('[type="submit"]').click();
});