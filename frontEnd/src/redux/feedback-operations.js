import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendFeedback } from 'helpers/api';
import { toast } from 'react-toastify';

export const sendData = createAsyncThunk(
  'feedbackObj/send',
  async (data, thunkAPI) => {
    try {
      const result = await sendFeedback(data);
      toast.success('Feedback was sended successful');
      return result;
    } catch (error) {
      toast.error('Can not send the feedback');
      return thunkAPI.rejectWithValue(error);
    }
  }
);
