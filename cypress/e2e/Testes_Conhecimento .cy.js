/// <reference types='cypress' />


describe('Test Cypress Good Practices', () => {
  var brand
  var countBrand
  var countTotal 

  beforeEach(function(){
     cy.accessHomePage()
     brand=0
     countBrand=0
     countTotal=0

     cy.intercept(
        'GET',
        '**/brand_products/**'
     ).as('getBrandProd')

     cy.intercept(
            'GET',
            '**products?search**'
      ).as('getProducts')
  })


  
  it('Login successful', () => {
    cy.accessSignupLogin()
    cy.login()
  })


   
  for (let k=0;k<Cypress.env('countBrands');k++) {
   
    brand= k+1
    it('Valide a quantidade da marca' + brand +' com a exibição na página', () => {
  
      cy.get('ul[class="nav nav-pills nav-stacked"] li').eq(k).find('a').then(($a) => {

          cy.log("Brand: " + $a.text())

          cy.wrap($a).find('span').then(($span) => {
            cy.wrap($span).invoke('text').then(($text) => {
            
              countBrand= ($text).slice(1,-1)
              cy.log(countBrand)
               
              countTotal=(Number(countBrand) + 1) 
              cy.log(countTotal)

              cy.get($a).click()
              cy.wait('@getBrandProd')
            
              cy.get('div[class=col-sm-4]').should('have.length', countTotal)

          })
        })
            
      });

    })
  }

  

  const products = ['Polo','Women','XXXX']
  products.forEach(product=>{
    it('Pesquisar produto: ' + product , () => {
      cy.accessProducts()
      cy.search(product)

      cy.wait('@getProducts')

      if(product=='XXXX'){
        cy.get('div[class=col-sm-4]').should('have.length', 1)
      }else {
        cy.get('div[class=col-sm-4]').its('length').should('be.greaterThan',1)
      }
    })
  })




});




