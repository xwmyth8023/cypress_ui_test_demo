/// <reference types="Cypress" />

describe('SEO Check', ()=>{
  before(()=>{
    cy.visit('https://www.thebump.com')
  })

  it('test',()=>{
    cy.get('meta[property="og:title"]')
        .invoke('attr', 'content')
        .then((content) => {
          expect(content).to.equal('TheBump.com - Pregnancy, Parenting and Baby Information');
        });
  })
})