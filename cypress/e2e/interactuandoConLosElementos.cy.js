describe('Interactuar con los elementos', ()=>{
    // beforeEach(()=>{
    //     cy.visit('/buttons')
    // })

    it('Click', ()=>{
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
    })

    it('Double click', ()=>{
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
    })

    it('Right click', ()=>{
        cy.get('#rightClickBtn').rightclick()        
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })

    it('Right click', ()=>{
        cy.visit('/dynamic-properties')
        //cy.get('#enableAfter').click({timeout:0})
        cy.get('#enableAfter').click({timeout:0, force:true})
      
    })

    it('Click por posición', ()=>{
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click(5,60)

    })

    it('Input type text', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Jennifer')
        cy.get('#lastName').type('Rondón')
        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('Andrea')
        cy.get('#firstName').clear()
    })

    it.only('Checkboxes and radio buttons', ()=>{
        cy.visit('/automation-practice-form')
        //cy.get('#gender-radio-1').click()
        //cy.get('#gender-radio-1').click({force:true})
        cy.get('label[for="gender-radio-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()

        
    })
})