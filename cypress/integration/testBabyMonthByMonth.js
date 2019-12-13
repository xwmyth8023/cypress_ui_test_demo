/// <reference types="Cypress" />

describe('SEO Check', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('babyMonthByMonth.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/baby-month-by-month')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})