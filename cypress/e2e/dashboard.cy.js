describe('Dashboard Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/dashboard');
    });
  
    it('should redirect to login page if user is not logged in', () => {
      // Ensure token is not present in local storage
      window.localStorage.removeItem('tokenn');
  
      // Visit dashboard page
      cy.visit('http://localhost:3000/dashboard');
  
      // Check if redirected to login page
      cy.location('pathname').should('eq', '/');
    });
  
    it('should render dashboard content if user is logged in', () => {
      // Set token in local storage to indicate user is logged in
      window.localStorage.setItem('tokenn', 'your-test-token-value');
  
      // Visit dashboard page
      cy.visit('http://localhost:3000/dashboard');
  
    //   // Check if dashboard content is rendered
    //   cy.get('.info-bar').should('contain', 'DASHBOARD');
    //   cy.get('.dashboard-data-section').should('exist');
    });
  });
  