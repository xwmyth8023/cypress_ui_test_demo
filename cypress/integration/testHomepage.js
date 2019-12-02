/// <reference types="Cypress" />
describe('SEO Check', ()=>{

  let data

  before(()=>{
    cy.fixture('homepage').then(json => {
      data = json
    })
    cy.viewport('macbook-15')
    cy.visit('/')
  })
  
  it('check og title',()=>{
    cy.get(data.ogTitle.locator)
        .invoke('attr', 'content')
        .then((content) => {
          expect(content).to.equal(data.ogTitle.content);
        });
  })

  it('check description', ()=>{
    cy.get(data.description.locator)
      .invoke('attr','content')
      .then((content)=>{
        expect(content).to.equal(data.description.content)
      })
  })

  it('check og title',()=>{
    // cy.get(data.ogTitle.locator)
    //   .invoke('attr','content')
    //   .then((content)=>{
    //     expect(content).to.equal(data.description.content)
    //   })
    cy.checkSEO(data,'ogTitle')
  })
})