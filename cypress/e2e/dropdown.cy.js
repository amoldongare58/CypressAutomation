/// refernce types ="Cypress"

describe ("dropdowns", function (){

    it.skip("select class dropdowns", function(){

     cy.visit("https://practice.expandtesting.com/dropdown")

     cy.get ('#country').select('AZ').should('have.value','AZ')
     })

     it("dynamic dropdown Auto suggested", function(){

        cy.visit("https://www.google.com/")
   
        cy.get ("[name='q']").type('cypress automation')
        cy.get ("[class='wM6W7d']").contains('cypress automation').click()




        })
   


}
)