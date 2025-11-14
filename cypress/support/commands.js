
Cypress.Commands.add('login', (usuario, senha) => {

  cy.get('#username').clear().type(usuario);
  cy.get('#password').clear().type(senha);
  cy.get('input[name="login"]').click();

});

Cypress.Commands.add('Escolher', (cor) => {

 cy.get('img[src*="ms01-blue_main"]').first().click();
 cy.get('li[data-value="S"]').first().click();
 cy.get(`li[data-value="${cor}"]`).first().click();

});
