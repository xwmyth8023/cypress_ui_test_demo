/// <reference types="Cypress" />

describe('SEO Check', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('8weeksPregnant.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/pregnancy-week-by-week/8-weeks-pregnant')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})