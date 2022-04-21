import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userListSlice } from "./reducers/userListSlice";


const rootReducers = combineReducers({
  userListSlice: userListSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
