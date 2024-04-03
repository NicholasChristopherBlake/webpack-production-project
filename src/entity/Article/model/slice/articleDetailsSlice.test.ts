import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'Nick',
  },
  type: [],
  blocks: [],
};
describe('articleDetailsSlice.test', () => {
  test('test fetch article by id service pending (extraReducer)', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test fetch article by id fulfilled (extraReducer)', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(article, '1', ''),
      ),
    ).toEqual({
      isLoading: false,
      data: article,
    });
  });
});
