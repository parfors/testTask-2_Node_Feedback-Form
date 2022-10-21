import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-left: 143px;
  @media screen and (max-width: 900px) {
    & {
      margin-left: 0;
    }
  }
`;

export const TitleFormStyled = styled.h3`
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.large};
  font-family: regular;
  font-weight: 400;
  color: ${p => p.theme.colors.dark};

  @media screen and (max-width: 900px) {
    & {
      text-align: center;
    }
  }
`;

export const FormStyled = styled.form`
  max-width: 557px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 900px) {
    & {
      margin: 0 auto;
    }
  }
`;

export const InputFormStyled = styled.input`
  padding-left: 46px;
  height: 93px;
  width: 100%;
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSizes.medium};
  font-family: regular;
  font-weight: 400;
  color: ${p => p.theme.colors.inputDark};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 10px;
  &::placeholder {
    font-size: ${p => p.theme.fontSizes.medium};
    font-family: regular;
    font-weight: 400;
    color: ${p => p.theme.colors.inputDark};
  }
`;

export const TextareaFormStyled = styled.textarea`
  height: 189px;
  width: 100%;
  padding-left: 46px;
  padding-top: 31px;

  margin-bottom: 23px;
  font-size: ${p => p.theme.fontSizes.medium};
  font-family: regular;
  font-weight: 400;
  color: ${p => p.theme.colors.inputDark};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 10px;
  resize: none;
  &::placeholder {
    font-size: ${p => p.theme.fontSizes.medium};
    font-family: regular;
    font-weight: 400;
    color: ${p => p.theme.colors.inputDark};
  }
`;

export const ButtonFormStyled = styled.button`
  font-size: ${p => p.theme.fontSizes.medium};
  font-family: medium;
  font-weight: 400;
  height: 73px;
  width: 218px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border-radius: 500px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.footerBg};
    color: ${p => p.theme.colors.accent};
  }
`;
