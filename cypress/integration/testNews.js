/// <reference types="Cypress" />

const data = ["title","description","keyWords","ogTitle","ogDescription","ogImage","ogUrl","ogType"]

describe('SEO Check', ()=>{
  // let data = 
  let jsonData

  before(()=>{
    cy.fixture('news.json').then((json) => {
      jsonData = json
    })
    cy.viewport('macbook-15')
    cy.visit('/news')
    
  })

  data.forEach(item => {
    it(`check ${item}`,() => {
      cy.checkSEO(jsonData,item)
    })
  })
})