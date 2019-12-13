/// <reference types="Cypress" />

describe('Pregnancy Week by Week', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('pregnancyWeekByWeek.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/pregnancy-week-by-week')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})