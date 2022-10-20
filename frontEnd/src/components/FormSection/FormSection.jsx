import { ContainerStyled, SectionStyled } from 'components';
import FormFeedback from '../FormFeedback/FormFeedback';

export default function FormSection() {
  return (
    <>
      <SectionStyled>
        <ContainerStyled>
          <FormFeedback />
        </ContainerStyled>
      </SectionStyled>
    </>
  );
}
