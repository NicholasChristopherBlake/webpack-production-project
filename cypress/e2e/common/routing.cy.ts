import { selectByTestId } from "cypress/helpers/selectByTestId";

describe('Routing', () => {
  describe('User is NOT authed', () => {
    it('Route to the main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Route to the profile page (should be redirected to main)', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Route to non-existing route', () => {
      cy.visit('/123123123');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('User is Authed', () => {
    beforeEach(() => {
      cy.login(); // using default testuser login here
    });
    it('Route to the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Route to the articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
