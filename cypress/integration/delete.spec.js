describe('post Testing', () => {
    
    Cypress.config('baseUrl', 'https://petstore.swagger.io/v2/')
    
    

    it('POST - create', () => {
        const item = {"id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0}
        cy.request('POST', '/user', item).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.duration).to.not.be.greaterThan(2000)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')

           
           
        })
        
    })
    it('delete', () => {
        const item = {"username":"string"}
        cy.request({method:'Delete', url:'/user/string', body:item, failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.duration).to.not.be.greaterThan(2000)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')

           
           
        })
    })

})