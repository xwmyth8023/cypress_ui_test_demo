/// <reference types="Cypress" />

describe('Videos', ()=>{
   
  let jsonData
  let checkItems = Cypress.config('checkItems')

  before(()=>{
    cy.fixture('video.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/videos')
    
  })

  checkItems.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})