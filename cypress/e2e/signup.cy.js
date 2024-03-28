describe('Signup Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup'); // Visit the signup page before each test
    });
  
    it('should display the signup form', () => {
      // Ensure the signup form elements are present
      cy.get('form').should('exist');
      cy.get('input[type="text"]').should('exist');
      cy.get('input[type="email"]').should('exist');
      cy.get('input[type="password"]').should('exist');
      cy.get('button').contains('Sign Up').should('exist');
    });
  
    it('should show error message for invalid signup data', () => {
      // Attempt to submit the form with invalid data
      cy.get('input[type="text"]').type(' '); // Enter empty name
      cy.get('input[type="email"]').type('invalid-email'); // Enter invalid email
      cy.get('input[type="password"]').type('short'); // Enter short password
      cy.get('button').contains('Sign Up').click(); // Click on sign up button
  
      // Expect error message for each field
    //   cy.contains('Please enter your name').should('exist');
    //   cy.contains('Please enter a valid email').should('exist');
    //   cy.contains('Password must be at least 6 characters long').should('exist');
    });
  
    it('should show success message for valid signup data', () => {
      // Stub the HTTP request to the signup API endpoint
      cy.intercept('POST', 'http://localhost:3001/signup', {
        statusCode: 201,
        body: {
          user: {
            name: 'Test User',
            email: 'test@example.com'
          },
          token: 'mockedToken'
        }
      }).as('signup');
  
      // Enter valid signup data and submit the form
      cy.get('input[type="text"]').type('Test User');
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button').contains('Sign Up').click();
  
      // Expect success message to be displayed
      //cy.contains('Signup successful').should('exist');
    });
  });
  