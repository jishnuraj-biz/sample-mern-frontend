/// <reference types="cypress" />

describe('Homepage', () => {
    before(() => {
        cy.visit('http://localhost:5173/')
    })
    it('show page title "My App"', () => { 
        cy.contains('My App');
     });
 })