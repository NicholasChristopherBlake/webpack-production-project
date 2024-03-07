import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { Article } from '../../types/article';

const article: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: {
    id: '1',
    username: 'Arthur',
  },
  type: [],
  blocks: [],
};

describe('fetchArticleById.test', () => {
  test('successful fetching', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.api.get).toHaveBeenCalledWith(
      '/articles/1',
      { params: { _expand: "user" } },
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(article);
  });

  test('error fetching', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
