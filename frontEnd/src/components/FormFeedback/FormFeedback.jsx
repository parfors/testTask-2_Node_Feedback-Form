import {
  ButtonFormStyled,
  FormStyled,
  InputFormStyled,
  TextareaFormStyled,
  TitleFormStyled,
  FormWrapper,
} from 'components';
import { useDispatch } from 'react-redux/es/exports';
import { clearState, setEmail, setFeedback, setName } from 'redux/formSlice';
import { useSelector } from 'react-redux';
import { getEmail, getFeedback, getLoading, getName } from 'redux/selectors';
import { sendFeedback } from 'helpers/api';
import { sendData } from 'redux/feedback-operations';

export default function FormFeedback() {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const feedback = useSelector(getFeedback);
  const loading = useSelector(getLoading);

  const changeHandler = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'name':
        dispatch(setName(inputValue));
        break;
      case 'email':
        dispatch(setEmail(inputValue));
        break;
      case 'feedback':
        dispatch(setFeedback(inputValue));
        break;
      default:
        return;
    }
  };

  const createFeedback = () => {
    return {
      name,
      email,
      feedback,
    };
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!name || !feedback || !email) {
      alert('Please fill in all fields');
      return;
    }
    const feedbackObj = createFeedback();
    dispatch(sendData(feedbackObj));
    resetForm();
  };

  const resetForm = () => {
    dispatch(clearState());
  };

  return (
    <>
      <FormWrapper>
        <TitleFormStyled>Reach out to us!</TitleFormStyled>
        <FormStyled onSubmit={submitHandler}>
          <InputFormStyled
            name="name"
            onChange={changeHandler}
            placeholder="Your name*"
            value={name}
            type="text"
          />
          <InputFormStyled
            name="email"
            onChange={changeHandler}
            placeholder="Your e-mail*"
            value={email}
            type="email"
          />
          <TextareaFormStyled
            name="feedback"
            onChange={changeHandler}
            placeholder="Your message*"
            value={feedback}
          />
          <ButtonFormStyled type="submit">
            {' '}
            {loading ? 'Sending...' : 'Sand message'}
          </ButtonFormStyled>
        </FormStyled>
      </FormWrapper>
    </>
  );
}
