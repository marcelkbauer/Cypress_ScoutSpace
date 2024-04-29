/// <reference types ="cypress" />
/// <reference types ="cypress-xpath" />

describe('ScoutSpace Login', () => {
  it('Successful Login', () => {
    cy.visit('https://staging.topcommute.io/users/sign_in')
    //validate correct URL
    cy.url().should('include', '/users/sign_in')
    cy.get('#user_email').type('marcel+topcom@cratebind.com')
    cy.get('#user_password').type('Password1')
    cy.get('#new_user > .w-100').click()
    //Sign Out Button
    cy.get(':nth-child(2) > .t-decoration-none > .nav-item').should('be.visible')
    //Surveys Button
    cy.get('[href="/"] > .nav-item').should('be.visible')
    //Profile Button
    cy.get('[href="/profile"] > .nav-item').should('be.visible')
    //Settings Button
    cy.get('[href="/accounts/33/settings/info"] > .nav-item').should('be.visible')
    //Tokens Section
    cy.get('.hide-xs > :nth-child(2) > .px-16px').should('be.visible')
    //Surveys Dropdown
    cy.get('.gx-0 > .flex > .dropdown > .btn').should('be.visible')
    //Search Surveys Search bar
    cy.get('.gx-0 > .flex > .dropdown > .btn').should('be.visible')
    //New Survey Button
    cy.get('.text-end > .btn').should('be.visible')
    //Click Sign Out
    cy.get(':nth-child(2) > .t-decoration-none > .nav-item').should('be.visible').click()
    //Verify Logged out - Login header/Login Page
    cy.get('.font-size-28').should('be.visible')


  })

})