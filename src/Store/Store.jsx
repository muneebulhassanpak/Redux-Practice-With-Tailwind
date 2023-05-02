import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
  counterVisibility: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state, action) {
      state.counter = state.counter + 1;
    },
    decrease(state, action) {
      state.counter = state.counter - 1;
    },
    toggle(state, action) {
      state.counterVisibility = !state.counterVisibility;
    },
  },
});

const authInitialState = {
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const Store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export default Store;
