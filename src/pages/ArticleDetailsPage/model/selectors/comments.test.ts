import { StateSchema } from "app/providers/StoreProvider";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "./comments";

describe('comments.test - getArticleComments', () => {
  test('getArticleComments isLoading correct value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });
  test('getArticleComments error correct value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
