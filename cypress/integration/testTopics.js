/// <reference types="Cypress" />
describe('SEO Check', ()=>{

  let data
  
  before(()=>{
    cy.fixture('example').then(json =>{
      data=json
      cy.visit(data.topics.ttc)
    })
  })

  it('test fixture',()=>{
    
  })

})