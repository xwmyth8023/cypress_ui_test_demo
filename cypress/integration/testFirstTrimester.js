/// <reference types="Cypress" />

describe('First Trimester', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('firstTrimester.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/topics/first-trimester')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})