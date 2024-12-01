describe('my first test ', function() 
{
    it('verify title positive', function() 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
    }
      )

      it('verify title negative', function() 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','Orangehrm')
      
    }
      )
}
)