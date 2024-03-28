describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('renders login form', () => {
      cy.contains('Login to your account');
      cy.get('input[type="email"]').should('exist');
      cy.get('input[type="password"]').should('exist');
      cy.get('button').contains('Log In').should('exist');
      cy.contains('New to my App?').should('exist');
      cy.contains('Sign up').should('exist');
    });
    it('logs in successfully with valid credentials', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('password123');
        cy.get('button').contains('Log In').click();
        //cy.url().should('include', '/dashboard'); // Assuming successful login redirects to /dashboard
      });
    it('displays error message with invalid credentials', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input[type="email"]').type('invalid@example.com');
        cy.get('input[type="password"]').type('invalidpassword');
        cy.get('button').contains('Log In').click();
        cy.contains('Signup failed. Please try again.').should('exist');
      });
    it('redirects to signup page when "Sign up" link is clicked', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Sign up').click();
        cy.url().should('include', '/signup');
      });
  });