import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle booking API
export const bookSession = createAsyncThunk(
  "session/bookSession",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/book_session", formData); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookSession.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(bookSession.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Something went wrong!";
      });
  },
});

export default sessionSlice.reducer;
