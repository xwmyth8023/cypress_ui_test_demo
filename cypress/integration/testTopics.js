/// <reference types="Cypress" />

const data = ["title","description","keyWords","ogTitle","ogDescription","ogImage","ogUrl","ogType"]

describe('SEO Check', ()=>{
  // let data = 
  let jsonData

  before(()=>{
    cy.fixture('topics.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/topics')
    
  })

  data.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})