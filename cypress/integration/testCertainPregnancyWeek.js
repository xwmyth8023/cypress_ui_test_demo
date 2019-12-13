/// <reference types="Cypress" />

const data = ["title","description","keyWords","ogTitle","ogDescription","ogImage","ogUrl","ogType"]

describe('SEO Check', ()=>{
   
  let jsonData

  before(()=>{
    cy.fixture('8weeksPregnant.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/pregnancy-week-by-week/8-weeks-pregnant')
    
  })

  data.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})