import { Article } from '../../../src/entity/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: "What's new in JavaScript in 2022?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.04.2022',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) =>
  cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'asfsas' }, // need auth header
      body: article ?? defaultArticle,
    })
    .then((res) => res.body); // get only body of response

export const deleteArticle = (articleId?: string) =>
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asfsas' }, // need auth header
  });

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      deleteArticle(articleId?: string): Chainable<void>;
    }
  }
}
