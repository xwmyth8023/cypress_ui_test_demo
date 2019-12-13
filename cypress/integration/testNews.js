/// <reference types="Cypress" />

describe('News', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('news.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/news')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})