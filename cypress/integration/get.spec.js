describe('API Testing', () => {
    
   
    
    it('GET - read', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('of undefined')
              done()
              return false
            });
        cy.request('https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.duration).to.not.be.greaterThan(2000)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')

           
           
        })

    })
        it('GET - read', () => {
            cy.on('uncaught:exception', (err, runnable) => {
                expect(err.message).to.include('of undefined')
                  done()
                  return false
                });
        cy.request('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
  .its('body') // yields the response object
  .its('0') // yields the first element of the returned list
  // the above two commands its('body').its('0')
  // can be written as its('body.0')
  // if you do not care about TypeScript checks
  .then((user) => {
    expect(user).property('id').to.be.a('number')
    expect(user).property('name').to.be.a('string')
    expect(user).property('status').to.be.a('string')
    })
  
    })




  
   
})

  
