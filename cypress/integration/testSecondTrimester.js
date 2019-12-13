/// <reference types="Cypress" />

describe('Second Trimester', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('secondTrimester.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/topics/second-trimester')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})