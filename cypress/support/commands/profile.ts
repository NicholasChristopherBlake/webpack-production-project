export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asfsas' }, // need auth header
    body: {
      id: '4',
      first: 'Test',
      lastname: 'User',
      age: 25,
      currency: 'USD',
      country: 'Kazakhstan',
      city: 'Barcelona',
      username: 'testuser',
      avatar:
        'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
    },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
