/// <reference types="Cypress" />

describe('Toddler Month By Month', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('toddlerMonthByMonth.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/toddler-month-by-month')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})