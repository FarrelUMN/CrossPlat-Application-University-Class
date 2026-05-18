import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  name: string;
}

const initialState: CounterState = {
  value: 0,
  name: 'Anonymous',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },

    setAge: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setName, setAge } =
  counterSlice.actions;

export default counterSlice.reducer;