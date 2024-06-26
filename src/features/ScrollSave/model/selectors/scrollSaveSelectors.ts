import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getSaveScroll = (state: StateSchema) => state.scrollSave.scroll;
export const getSaveScrollByPath = createSelector(
  // for returning only number of pixels from this object
  getSaveScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
