/// <reference types="cypress" />

describe('Login Spec', () => {
  it('Should render error with invalid credentials', () => {
    cy.visit('http://localhost:4000/login');
    cy.get('[data-cy="login-input-email"]').type('invalid_email@test.com');
    cy.get('[data-cy="login-input-password"]').type('invalid_password');
    cy.get('form').submit();
    cy.contains('unauthorized', { matchCase: false });
  });

  it('Should render dashboard on success', () => {
    cy.visit('http://localhost:4000/login');
    cy.get('[data-cy="login-input-email"]').type('test@sold.com');
    cy.get('[data-cy="login-input-password"]').type('test1234');
    cy.get('form').submit();
    cy.location('pathname').should('eq', '/dashboard');
  });
});
