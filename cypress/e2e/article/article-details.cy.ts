let currentArticleId = ''; // for clearing
describe('User visits Article Details Page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.deleteArticle(currentArticleId);
  });
  // Create article - test - then delete article from DB
  // no need to delete comment - JSON server does it automatically
  // because of the relation to articleId
  it('and sees content of the article', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('and sees recommendations list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('and sends comment', () => {
    cy.getByTestId('ArticleDetails.Info'); // wait until article is loaded
    cy.getByTestId('AddCommentForm').scrollIntoView(); // important to scroll
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('and sets rating', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
  it('(using fixture) and sets rating', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
