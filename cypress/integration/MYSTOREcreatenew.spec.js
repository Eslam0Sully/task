/// <reference types ="cypress" />

beforeEach
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
       })
       it('shows alert', () => {
        const stub = cy.stub()
        cy.on('window:alert', stub)
        .then(() => {
          expect(stub).to.have.been.calledOnce
        })
       })

describe('Mystore', function(){
    it.only('login', function(){
cy.visit('http://automationpractice.com/index.php')

cy.get('.login').click({force: true});
cy.wait(2000)
cy.get('#email_create').type('ccrespo2008@gmail.com');
cy.wait(2000)
cy.get('#SubmitCreate > span').click({force:true});
cy.wait(2000)
cy.get('#id_gender1').click({force:true});
cy.wait(2000)
cy.get('#customer_firstname').type('sul');
cy.wait(2000)
cy.get('#customer_lastname').type('salah');
cy.wait(2000)
cy.get('#passwd').type('C123456789');
cy.get('#days').select('29')
cy.wait(2000)
cy.get('#months').select('April')
cy.wait(2000)
cy.get('#years').select('1992')
cy.wait(2000)
cy.get('#newsletter').click({force:true})
cy.wait(2000)
cy.get('#optin').click({force:true});
cy.wait(2000)
cy.get('#company').type('SDN');
cy.wait(2000)
cy.get('#address1').type('ACME Innovations IncPO Box 1033');
cy.wait(2000)
cy.get('#city').type('Los Angeles');
cy.wait(2000)
cy.get('#id_state').select('California')
cy.get('#postcode').type('93505');
cy.wait(2000)
cy.get('#other').type('4155552672')
cy.wait(2000)
cy.get('#phone').type('night')
cy.wait(2000)
cy.get('#phone_mobile').type('4155552672')
cy.wait(2000)
cy.get('#passwd').type('123456789')
cy.get('#submitAccount > span').click({force:true})


    })
})
