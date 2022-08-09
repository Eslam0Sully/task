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

cy.get('#email').type('ccrespo2008@gmail.com')
cy.wait(2000)
cy.get('#passwd').type('C123456789')
cy.wait(2000)
cy.get('#SubmitLogin > span').click({force:true});

    })
})

