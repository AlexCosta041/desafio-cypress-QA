describe('Login - Loja EBAC', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    cy.fixture('usuario').as('loginData');
  });

    it('Deve realizar login com credenciais válidas', function () {

    cy.get('#username').clear().type(this.loginData.usuario);
    cy.get('#password').clear().type(this.loginData.senha);
    cy.get('input[name="login" ]').click();

  
  });

  it('Deve exibir erro com credenciais inválidas', function () {

    cy.get('#username').clear().type('email_invalido@teste.com');
    cy.get('#password').clear().type('senhaerrada');
    cy.get('input[name="login" ]').click();

    cy.get('.woocommerce-error')
      .should('be.visible')
      .and('contain', 'Endereço de e-mail desconhecido');
  });



});
