import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsReducer } from '@/entity/Article/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (Story: StoryFn) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
