 // store.js (Redux store file)
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Initial state (JSON object)
const initialState = {
  userData: null, // This will hold our JSON data
};

// Create a slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload; // Update JSON data
    },
  },
});

// Extract actions and reducer
export const { setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;

// Configure the store with the reducer
const store = configureStore({
  reducer: {
    user: userReducer, // Store the user data in the 'user' slice
  },
});

export default store;
