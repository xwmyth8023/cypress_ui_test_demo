/// <reference types="Cypress" />

describe('Certain Toddler Month', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('19monthOldMonth.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/toddler-month-by-month/19-month-old-month-old')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})