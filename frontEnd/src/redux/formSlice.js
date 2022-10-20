import { createSlice } from '@reduxjs/toolkit';
import * as operations from 'redux/feedback-operations';

const initialState = {
  feedbackObj: {
    body: {},
    loading: false,
    error: null,
  },
  name: '',
  email: '',
  feedback: '',
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
    clearState: (state, _) => {
      state.name = '';
      state.email = '';
      state.feedback = '';
    },
  },
  extraReducers: {
    [operations.sendData.pending]: state => {
      state.feedbackObj.loading = true;
      state.feedbackObj.error = null;
    },
    [operations.sendData.fulfilled]: (state, action) => {
      state.feedbackObj.loading = false;
      state.feedbackObj.body = action.payload;
    },
    [operations.sendData.rejected]: (state, action) => {
      state.feedbackObj.loading = false;
      state.feedbackObj.error = action.payload;
    },
  },
});

export const { setName, setEmail, setFeedback, clearState } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
