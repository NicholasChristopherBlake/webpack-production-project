import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";
import { loginReducer } from "features/AuthByUsername";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
