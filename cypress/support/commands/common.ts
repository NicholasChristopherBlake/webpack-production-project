import { selectByTestId } from '../../helpers/selectByTestId';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entity/User';

export const login = (
  username: string = 'testuser',
  password: string = '123',
) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login', // our backend endpoint
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
    return body;
  });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
