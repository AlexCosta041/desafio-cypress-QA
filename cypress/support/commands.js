

Cypress.Commands.add('login_new', (email, password) => {
 cy.visit('/');
 cy.get('a[href*="login"]').first().click();
 cy.get('input[placeholder="Email Address"]').eq(0).type(email);
 cy.get('input[placeholder="Password"]').eq(0).type(password);
 cy.get('button').contains('Login').click();
});

Cypress.Commands.add('completeSignup', () => {
  cy.fixture('userData').then((userData) => {
    const signupPage = new SignupPage();

    signupPage.fillAccountDetails(
      userData.title,
      userData.password,
      userData.day,
      userData.month,
      userData.year
    );
    signupPage.fillAddressDetails(
      userData.firstName,
      userData.lastName,
      userData.company,
      userData.address,
      userData.country,
      userData.state,
      userData.city,
      userData.zipcode,
      userData.mobile
    );
    signupPage.clickCreateAccount();
  });
});

Cypress.Commands.add('fullSignup', () => {
  cy.fixture('userData').then((userData) => {
    const homePage = new HomePage();
    const signupPage = new SignupPage();

    homePage.visit();
    homePage.clickSignupLogin();
    signupPage.fillName(userData.name);
    signupPage.fillEmail(userData.email);
    signupPage.clickSignup();

    cy.completeSignup();
  });
});

Cypress.Commands.add('loginWithUserData', () => {
  cy.fixture('userData').then((userData) => {
    cy.login_new(userData.email, userData.password);
  });
});


Cypress.Commands.add('accessHomePage', () => {
     cy.visit('/')
     cy.get('img[src="/static/images/home/logo.png"]').should('be.visible')
     cy.url().should('be.equal', Cypress.env('urlHomePage'))
})

Cypress.Commands.add('accessSignupLogin', () => {
    cy.get('a[href="/login"]').should('have.attr','href','/login').and('not.have.attr','target')
    cy.get('a[href="/login"]').click()
    cy.url().should('be.equal', Cypress.env('urlSigupLogin'))
    cy.get('input[data-qa="signup-name"]').should('be.visible')
    cy.get('input[data-qa="signup-email"]').should('be.visible')
    cy.get('input[data-qa="login-email"]').should('be.visible')
    cy.get('input[data-qa="login-password"]').should('be.visible')
})

Cypress.Commands.add('login', () => {
    cy.get('input[data-qa="login-email"]').type(Cypress.env('emailValid'))
    cy.get('input[data-qa="login-password"]').type(Cypress.env('passwordValid'))
    cy.get('button[data-qa="login-button"]').click()
    cy.url().should('be.equal', Cypress.env('urlHomePage'))
    cy.get('ul.nav.navbar-nav li').eq(9).should('contain.text','Logged in as')
    cy.get('a[href="/logout"]').should('be.visible')
})

Cypress.Commands.add('accessProducts', () => {
    cy.accessHomePage()
    cy.get('a[href="/products"]').should('have.attr','href','/products').and('not.have.attr','target')
    cy.get('a[href="/products"]').click()
    cy.url().should('be.equal', Cypress.env('urlProducts'))
    cy.get('#search_product').should('be.visible')
})

Cypress.Commands.add('search',term=>{
    cy.get('input[type="text"]').should('be.visible')
    .clear()
    .type(`${term}{enter}`)
    cy.get('#submit_search').click()    
})