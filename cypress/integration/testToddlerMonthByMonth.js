/// <reference types="Cypress" />

const data = ["title","description","keyWords","ogTitle","ogDescription","ogImage","ogUrl","ogType"]

describe('SEO Check', ()=>{
  // let data = 
  let jsonData

  before(()=>{
    cy.fixture('toddlerMonthByMonth.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/toddler-month-by-month')
    
  })

  data.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})