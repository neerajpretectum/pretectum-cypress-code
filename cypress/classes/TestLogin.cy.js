/// <reference types="cypress" />

it("Login Test", () => {
    cy.visit('https://pretectum.net')
    cy.get('#basic_email').type('testing1@malaymo.com')
    cy.get('#basic_password').type('Maria@027')
    cy.get('.ant-form-item-control-input-content > .ant-btn').contains("Login").click()
    
    //Maria@101
})