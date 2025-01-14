/// <reference types ="Cypress"/>

describe("check UI elements", function(){

   it("radiobuton interaction", function(){

    cy.visit("https://practice.expandtesting.com/radio-buttons")

    // visibility of radio buttons

    cy.get("#basketball").should('be.visible')
    cy.get("#football").should('be.visible')

    //selecting and varifying the radio buttons

    cy.get("#basketball").check().should('be.checked')

    cy.get("#football").should('not.be.checked')



   })



})