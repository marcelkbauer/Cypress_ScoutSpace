/// <reference types ="cypress" />
/// <reference types ="cypress-xpath" />

describe('ScoutSpace Profile Page', () => {
  it('Check profile page', () => {
    cy.visit('https://staging.topcommute.io/users/sign_in')
    //validate correct URL
    cy.url().should('include', '/users/sign_in')
    cy.get('#user_email').type('marcel+topcom@cratebind.com')
    cy.get('#user_password').type('Password1')
    cy.get('#new_user > .w-100').click()
    cy.wait(5200);
    cy.get('[href="/profile"] > .nav-item').click()
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
    //clear Profile Name text box
    cy.get('#user_name').clear()
    //Enter Otto Mater for Profile Name
    cy.get('#user_name').type('Otto Mater')
    //clear Profile Name text box
    cy.get('#user_name').clear()
    //Enter Marcel BauerAutomation for Profile Name
    cy.get('#user_name').type('Marcel BauerAutomation')
    //Clear Profile Title text Box
    cy.get('#user_title').clear()
    //Enter Dark Knight Defender of Gotham in Title Text box
    cy.get('#user_title').type('Dark Knight Defender of Gotham')
    //Clear Profile Title text Box
    cy.get('#user_title').clear()
    //Enter QQA EngineerAutomation in Title Text box
    cy.get('#user_title').type('QA EngineerAutomation')
    //click Save Button
    cy.get('.btn').click()
    cy.on('window:alert',(txt)=>{expect(txt).to.contains('Your account has been updated successfully.');
  })
    cy.wait(5200);
    //Clear Phone number field
    cy.get('#user_phone_number').clear()
    //Enter Phone Number
    cy.get('#user_phone_number').type('2065551234')
    //Clear Phone number field
    cy.get('#user_phone_number').clear()
    //Enter Phone Number
    cy.get('#user_phone_number').type('5555555555')
    //Clear Phone number field
    cy.get('#user_phone_number').clear()
    //Enter Phone Number
    cy.get('#user_phone_number').type('2063459999')
    //Clear Email Field
    cy.get('#user_email').clear()
    //Enter Email address
    cy.get('#user_email').type('marcel+ottoMation@cratebind.com')
    cy.get('#user_email').clear()
    //Enter Email address
    cy.get('#user_email').type('marcel+topcom@cratebind.com')
      //click Save Button
      cy.get('.btn').click()
      cy.on('window:alert',(txt)=>{expect(txt).to.contains('Your account has been updated successfully.');
    })
      cy.wait(5200);
      //current password text box
      cy.get('#user_current_password').should('be.visible')
      //New Password Text Box
      cy.get('#user_password').should('be.visible')
      //Confirm Password text box
      cy.get('#user_password_confirmation').should('be.visible')
      //License Number Header (is visible)
      cy.get(':nth-child(18) > .settings-card > .mb-16px').should('be.visible')
      //License Number Text Box (is visible)
      cy.get('#user_license_number').should('be.visible')
      //Avatar Container (is visible)
      cy.get(':nth-child(10) > .settings-card').should('be.visible')
      //profile image (is visible)
      cy.get('.row > .col > img').should('be.visible')
      //Browse Files Button "Avatar" (is visible)
      cy.get('.fw-600 > .bg-lighter-grey').should('be.visible')
      cy.get('.btn').should('be.visible')


  })

})