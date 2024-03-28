describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('Login Page', () => {
  it('submits login form', () => {
    cy.visit('http://localhost:3000/'); // Replace '/login' with the actual URL of your login page
    
    // Fill in the login form
    cy.get('input[type="email"]').type('your_email');
    cy.get('input[type="password"]').type('your_password');
    
    // Submit the form
    cy.get('form').submit();
    
    // Ensure that the user is redirected to the home page after successful login
    cy.url().should('include', '');
  });
});