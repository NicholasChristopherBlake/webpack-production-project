import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article, // type of returned value
  string | undefined, // type of arguments (articleId in this case)
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    if (!articleId) {
      throw new Error('No id');
    }

    const response = await extra.api.get<Article>(`/articles/${articleId}`, {
      // to return full info about user
      params: {
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
