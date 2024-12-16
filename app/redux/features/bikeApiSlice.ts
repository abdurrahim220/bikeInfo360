import { IBike } from "@/lib/interface.bike";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface BikeState {
  bikes: { data: IBike[] };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: BikeState = {
  bikes: { data: [] },
  status: "idle",
  error: null,
};

// Async thunk to fetch bikes
export const fetchBikes = createAsyncThunk("bikes/fetchBikes", async () => {
  const response = await axios.get("http://localhost:5000/api/v1/bikes");
  return response.data;
});

// Slice
const bikeApiSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bikes = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const bikeApi = createApi({
  reducerPath: "bikeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBikesByBrand: builder.query({
      query: (brand) => `/bikes?brand=${brand}`,
    }),
  }),
});

export const { useGetBikesByBrandQuery } = bikeApi;

export default bikeApiSlice.reducer;
