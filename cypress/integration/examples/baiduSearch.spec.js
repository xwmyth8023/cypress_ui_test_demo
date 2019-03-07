describe('Baidu Search', ()=>{
    
    beforeEach(() => {
        cy.visit('https://www.baidu.com')
    })

    it('Click 百度一下',()=>{
        cy.get('selector').click()
        cy.url().should('eq', 'https://www.baidu.com')
    })
})