describe('Aserciones', ()=>{

    before(()=>{
        cy.visit('/automation-practice-form')

    })

    it('Asertions', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
    })

    it('Asertions 2', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder', 'First Name')

        })
    })

    it('Asertions 3', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((element) => {
            assert.equal(element.attr('placeholder'), 'First Name')

        })
    })

    
})