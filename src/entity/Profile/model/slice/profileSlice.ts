import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";
import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
