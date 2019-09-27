/// <reference types="Cypress" />
let data

describe('SEO Check', ()=>{
  
  before(()=>{
    cy.fixture('homepage').then(json => {
      data = json
    })
    cy.viewport('macbook-15')
    cy.visit('/')
  })
  Object.keys(data).map(function(key) {

    it('check og title',()=>{
      cy.get(data[key]['locator'])
          .invoke('attr', 'content')
          .then((content) => {
            expect(content).to.equal(data[key]['content']);
          });
    })
    
  });
  // it('check og title',()=>{
  //   cy.get(data.ogTitle.locator)
  //       .invoke('attr', 'content')
  //       .then((content) => {
  //         expect(content).to.equal(data.ogTitle.content);
  //       });
  // })

  // it('check description', ()=>{
  //   cy.get(data.description.locator)
  //     .invoke('attr','content')
  //     .then((content)=>{
  //       expect(content).to.equal('Get pregnancy information, baby advice and parenting tips at TheBump.com baby website. Create a baby registry and use our pregnancy tools.')
  //     })
  // })
})