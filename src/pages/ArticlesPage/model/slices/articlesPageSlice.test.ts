import { Article } from "entity/Article";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { articlesPageReducer } from "./articlesPageSlice";

describe('articlesPageSlice.test', () => {
  test('test update articles page slice fulfilled', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
    };

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.fulfilled([{ id: '1' } as Article], '', { replace: true }),
    )).toEqual({
      isLoading: false,
      entities: { 1: { id: '1' } },
      ids: ['1'],
      hasMore: false,
    });
  });
});
