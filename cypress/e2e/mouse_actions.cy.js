/// reference types ="Cypress"

describe ('mouse actions', function(){

    it.only('mousehover', function(){

        cy.visit("https://the-internet.herokuapp.com/hovers")
       cy.get("div>[src='/img/avatar-blank.jpg']").trigger('mouseover').click();
       cy.get(".figcaption").should('have.text','name: user1');

        
    })
  
    it('right click', function(){

        cy.visit("https://the-internet.herokuapp.com/context_menu")

        cy.get('#hot-spot').trigger('contextmenu')

        cy.on('window:alert', (t)=>{

            expect(t).to.contains('You selected a context menu')
        })
    })




})