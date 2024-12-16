import { configureStore } from "@reduxjs/toolkit";
import bikeApiReducer ,{bikeApi} from "./features/bikeApiSlice";

const store = configureStore({
  reducer: {
    bikeApi: bikeApiReducer,
    [bikeApi.reducerPath]: bikeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bikeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
