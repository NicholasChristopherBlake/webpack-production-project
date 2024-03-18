import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";
import { Article } from "@/entity/Article";
import { ArticleDetailsRecommendationsSchema }
  from '../types/ArticleDetailsRecommendationsSchema';
import { fetchArticleRecommendations }
  from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

// No need to create our own selectors
export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articleDetailsRecommendationsActions,
} = articleDetailsRecommendationsSlice;
export const {
  reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
