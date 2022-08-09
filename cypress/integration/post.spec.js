describe('post Testing', () => {
    
    Cypress.config('baseUrl', 'https://petstore.swagger.io/v2/store')
    
    

    it('POST - create', () => {
        const item = {"id": 0,
        "petId": 0,
        "quantity": 0,
        "shipDate": "2022-08-09T13:24:03.163Z",
        "status": "placed",
        "complete": true}
        cy.request('POST', '/order', item).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.duration).to.not.be.greaterThan(2000)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')

           
           
        })
        
    })
    it.only('POST - create', () => {
        const item = {"id": 0,
        "petId": 0,
        "quantity": 0,
        "shipDate": "2022-08-09T13:24:03.163Z",
        "status": "placed",
        "complete": true}
        cy.request('POST', '/order', item).its('body') // yields the response object
       // yields the first element of the returned list
        // the above two commands its('body').its('0')
        // can be written as its('body.0')
        // if you do not care about TypeScript checks
        .then((user) => {
          expect(user).property('id').to.be.a('number')
          expect(user).property('petId').to.be.a('number')
          expect(user).property('status').to.be.a('string')
        
    })

    })
        

})