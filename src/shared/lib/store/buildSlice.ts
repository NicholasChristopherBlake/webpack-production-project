import {
  CreateSliceOptions, SliceCaseReducers,
  bindActionCreators, createSlice,
}
  from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

// Generic types are copied from createSlice in Redux
export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
  >(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useDispatch();
    // from redux documentation
    // @ts-ignore, because types for slice.actions don't work properly for some reason
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
  };

  return {
    ...slice,
    useActions,
  };
}
