/// <reference types="Cypress" />

describe('Ovulation Calculator', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('ovulationCalculator.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/ovulation-calculator')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})