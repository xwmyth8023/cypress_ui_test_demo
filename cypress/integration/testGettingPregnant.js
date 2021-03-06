/// <reference types="Cypress" />

describe('Getting Pregnant', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('gettingPregnant.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/topics/getting-pregnant')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})