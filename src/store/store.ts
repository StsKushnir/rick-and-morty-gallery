import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import charactersReducer from "../features/charactersSlice"
import filterReducer from "../features/filtersSlice"

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
