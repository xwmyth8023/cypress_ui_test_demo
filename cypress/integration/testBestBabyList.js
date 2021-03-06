/// <reference types="Cypress" />

describe('Best of Baby', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('bestBabyList.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/best-of-baby')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})