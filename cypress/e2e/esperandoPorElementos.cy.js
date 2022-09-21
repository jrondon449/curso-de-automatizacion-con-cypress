describe('Esperando por los elementos', ()=>{
    beforeEach(()=>{
        cy.visit('http://platzi.com')
    })

    it('Esperar por un tiempo definido', ()=>{
        cy.wait(5000)
    })

    it('Esperar por un elemento y hacer una aserción', ()=>{
        cy.get('.ButtonLogin-cta', {timeout:6000}).should('be.visible')
    })
})

describe('Esperando por los elementos y deshabilitar el retry', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it.only('Deshabilitar el Retry', ()=>{
        cy.get('header > a > img', {timeout:0})
    })

})