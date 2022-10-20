import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test-task-react-node-feeback.herokuapp.com',
});

export const getFeedbacks = async data => {
  const response = await instance.get('/api/feedbacks/');
  return response.data;
};

export const sendFeedback = async data => {
  const response = await instance.post('/api/feedbacks/', data);
  console.log(response);
  return response.data;
};
