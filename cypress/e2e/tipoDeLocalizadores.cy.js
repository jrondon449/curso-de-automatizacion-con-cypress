describe('Tipos de localizadores',()=>{
    
    before(()=>{
        cy.visit('/automation-practice-form')
    })

    it.skip('Obtenerlo por medio de un tag', ()=>{
        cy.get('input')
    })
    
    

    it('Obtenerlo por medio de un atributo', ()=>{
        cy.get('input[placeholder="First Name"]')
    })

    it('Obtenerlo por medio de un ID', ()=>{
        cy.get('#firstName')
    })

    it('Obtenerlo por medio de una clase', ()=>{
        cy.get('.mr-sm-2.form-control')
    })

    it('Usando contains', ()=>{
        cy.contains('Reading')
        cy.pause()
        cy.contains('.header-wrapper','Widgets')
    })

    it('Usando Parent y Parents', ()=> {
        // Obteniendo el elemento padre, es decir, el que está arriba en el DOM
        cy.get('input[placeholder="First Name"]').parent()
        // Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents()
        cy.get('input[placeholder="First Name"]').parents().find('label')


    })

})