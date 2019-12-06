/// <reference types="Cypress" />

const data = ["title","description","keyWords","ogTitle","ogDescription","ogImage","ogUrl","ogType"]

describe('SEO Check', ()=>{
   
  let jsonData

  before(()=>{
    cy.fixture('thirdTrimester.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/topics/third-trimester')
    
  })

  data.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})