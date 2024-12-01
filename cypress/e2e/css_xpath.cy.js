
describe ('suit name', function ()
{
    it ('css selector',function ()
    {
        cy.visit("https://automationexercise.com/products")

       cy.get("input#search_product").type("tshirts")

       cy.get("button#submit_search").click()
       
    }
)


}
)