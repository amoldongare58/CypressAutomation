/// reference types ='Cypress'


describe("Alerts", function(){

    it('alert with only ok text', function (){

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("[onclick='jsAlert()']").click()

    cy.on('window:alert', function (t) {

        expect(t).to.contains('I am a JS Alert')

   })

   cy.get('#result').should('have.text','You successfully clicked an alert')


   })

})