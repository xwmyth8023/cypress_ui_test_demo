/// <reference types="Cypress" />

describe('Homepage', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('homepage.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})