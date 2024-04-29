/// <reference types ="cypress" />
/// <reference types ="cypress-xpath" />

describe('Create New Survey', () => {
    it('Successfully Create a New Survey', () => {
      cy.visit('https://staging.topcommute.io/users/sign_in')
      //validate correct URL
      cy.url().should('include', '/users/sign_in')
      cy.get('#user_email').type('marcel+topcom@cratebind.com')
      cy.get('#user_password').type('Password1')
      cy.get('#new_user > .w-100').click()
      cy.wait(5600);
      cy.get('.text-end > .btn').click()
      cy.get('.modal-body').should('be.visible')
      cy.get('#company_name').type('this is a test Survey')
      //cy.get('.btn-grey').click()
      //cy.get('#company_name').type('Using Automation')
      
      
      
    })
  
  })