describe('Fluxo de Compra com Login - Loja EBAC', () => {

  beforeEach(() => {
    cy.visit('/minha-conta/');
    cy.fixture('usuario').as('loginData');
  });

  it('Deve logar, adicionar produto ao carrinho e finalizar a compra', function () {

    
   cy.login(this.loginData.usuario, this.loginData.senha);

    
    cy.get('body').should('contain', 'Minha conta');

    
    cy.get('a[href$="/produtos/"]:visible').click();

    
    cy.get('img[src*="ms01-blue_main"]').first().click();
    cy.get('li[data-value="S"]').first().click();
    cy.get('li[data-value="Yellow"]').first().click();

  
    cy.get('.single_add_to_cart_button').click();

    cy.contains('Ver carrinho').click();

    cy.get('.checkout-button').click();

    cy.get('input[type="checkbox"]').click();

    
    cy.get('#billing_first_name').clear().type(this.loginData.firstName);
    cy.get('#billing_last_name').clear().type(this.loginData.lastName);
    cy.get('#billing_address_1').clear().type(this.loginData.address);
    cy.get('#billing_city').clear().type(this.loginData.city);
    cy.get('#billing_postcode').clear().type(this.loginData.postcode);
    cy.get('#billing_phone').clear().type(this.loginData.phone);
    cy.get('#billing_email').clear().type(this.loginData.email);

    // 🔹 FINALIZAR PEDIDO
    cy.get('#place_order').click();


    cy.get('h1.page-title')
      .should('be.visible')
      .and('contain', 'Pedido recebido');


  });


  it('Deve exibir mensagem ao tentar comprar produto fora de estoque', function () {

  cy.login(this.loginData.usuario, this.loginData.senha);
  cy.get('body').should('contain', 'Minha conta');

  // Ir para produtos
  cy.get('a[href$="/produtos/"]:visible').click();

  cy.Escolher("Black")

  // Verificar mensagem
  cy.get('.stock')
    .should('contain', 'Fora de estoque')
    .and('be.visible');
});

it('Deve exibir mensagem ao tentar comprar sem escolher size e color', function () {

  
  cy.login(this.loginData.usuario, this.loginData.senha);
  cy.get('body').should('contain', 'Minha conta');

  // Ir para produtos
  cy.get('a[href$="/produtos/"]:visible').click();


  // Clicar em um produto esgotado — exemplo: “Ajax Full-Zip Sweatshirt”
 cy.get('img[src*="ms01-blue_main"]').first().click();
 

  // Clicar no botão sem escolher nada
  cy.get('.single_add_to_cart_button').click();


   cy.on('window:alert', (texto) => {
    expect(texto).to.contain('Selecione uma das opções do produto antes de adicioná-lo ao carrinho.'); // ou o texto exato do alerta
  });

});


it('Deve remover item do carrinho com sucesso', function () {

    cy.get('#username').clear().type(this.loginData.usuario);
    cy.get('#password').clear().type(this.loginData.senha);
    cy.get('input[name="login"]').click();

    
    cy.get('body').should('contain', 'Minha conta');

    
    cy.get('a[href$="/produtos/"]:visible').click();

    
   cy.Escolher("Yellow")

  
    cy.get('.single_add_to_cart_button').click();

    cy.contains('Ver carrinho').click();

  
    cy.get('i.fa.fa-trash-o').click() 


  // Validar carrinho vazio
  cy.get('div[class="woocommerce-message"]')
    .should('be.visible')
    .and('contain', '“Aero Daily Fitness Tee” removido');
});


});

