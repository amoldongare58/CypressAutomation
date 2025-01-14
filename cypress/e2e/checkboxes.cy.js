/// reference types= "Cypress"

describe("UI elements", function(){

  it("checkboxes elements", function(){

      cy.visit("https://total-qa.com/checkbox-example/#google_vignette")

      //selecting all the checkboxes
     // cy.get("input[type='checkbox']").check().should('be.checked')

     // selecting first and last checkboxex
    // cy.get("input[type='checkbox']").first().check()
     //cy.get("input[type='checkbox']").last().check()


     cy.get("input[type='checkbox']").eq(2).check().should('be.checked')

  })

})