/// <reference types="Cypress" />

const data = ["title","description","keyWords","ogTitle","ogDescription","ogImage","ogUrl","ogType"]

describe('SEO Check', ()=>{
  // let data = 
  let jsonData

  before(()=>{
    cy.fixture('community.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/community')
    
  })

  data.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})