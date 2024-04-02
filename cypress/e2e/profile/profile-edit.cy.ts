let profileId = ''; // for clearing after each test

describe('User visits profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('And profile is loaded successfully', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'Test');
  });
  it('And edits it', () => {
    const newFistname = 'new';
    const newLastname = 'lastname';
    cy.updateProfile(newFistname, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newFistname);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
