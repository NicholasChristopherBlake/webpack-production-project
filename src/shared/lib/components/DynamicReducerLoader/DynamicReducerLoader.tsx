import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer;
}

interface DynamicReducerLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount = true,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const mounted = mountedReducers[reducerKey as StateSchemaKey];
      // add new reducer only if it doesn't exist already
      if (!mounted) {
        store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey, _]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
