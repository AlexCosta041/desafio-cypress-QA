describe('Compra de Produto', () => {
  it('Deve comprar produto com sucesso usando dados compartilhados', () => {
    cy.loginWithUserData();

    cy.contains('Products').click();

    cy.wait(2000);

    cy.contains('Blue Top').parents('.productinfo').within(() => {
      cy.get('a').contains('Add to cart').click();
    });

    cy.get('u').contains('View Cart').click();

    cy.contains('Blue Top').should('be.visible');

    cy.get('.btn-default').contains('Proceed To Checkout').click();

    cy.get('.form-control').type('Test order comment');
    cy.get('.btn-default').contains('Place Order').click();

    cy.fixture('userData').then((userData) => {
      cy.get('[data-qa="name-on-card"]').type(userData.name);
      cy.get('[data-qa="card-number"]').type('4111111111111111');
      cy.get('[data-qa="cvc"]').type('123');
      cy.get('[data-qa="expiry-month"]').type('12');
      cy.get('[data-qa="expiry-year"]').type('2025');
      cy.get('[data-qa="pay-button"]').click();
    });

    cy.contains('Order Placed!').should('be.visible');
  });
});