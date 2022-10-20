import styled from 'styled-components';
import footerPinkSmile from 'images/footerRedSmile.png';
import footerGreenSmile from 'images/footerGreenSmile.png';
import footerYellowSmile from 'images/footerYellowSmile.png';
import { ReactComponent as LinkedInIcon } from 'images/linkedInIcon.svg';
import { ReactComponent as TwitterIcon } from 'images/twitterIcon.svg';
import { ReactComponent as FaceBookIcon } from 'images/faceBookIcon.svg';
import { ReactComponent as PinterestIcon } from 'images/pinterestIcon.svg';
import { ContainerStyled } from 'components';

export const FooterStyled = styled.footer`
  background-color: ${p => p.theme.colors.footerBg};
  background-image: url(${footerPinkSmile}), url(${footerGreenSmile}),
    url(${footerYellowSmile});
  background-repeat: no-repeat;
  background-position: 0 bottom, 90% 0, 100% 50%;
`;

export const FooterContainer = styled(ContainerStyled)`
  padding-top: 79px;
  padding-bottom: 105px;
`;

export const LinkList = styled.ul`
  padding: 0;
  margin-left: 343px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 550px) {
    & {
      margin-right: 70px;
      justify-content: flex-end;
    }
  }
`;
export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const LinkStyled = styled.a`
  cursor: pointer;
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
  fill: ${p => p.theme.colors.icons};
  &:hover {
    fill: ${p => p.theme.colors.accent};
  }
`;
export const FaceBookIconStyled = styled(FaceBookIcon)`
  fill: ${p => p.theme.colors.icons};
  &:hover {
    fill: ${p => p.theme.colors.accent};
  }
`;
export const TwitterIconStyled = styled(TwitterIcon)`
  fill: ${p => p.theme.colors.icons};
  &:hover {
    fill: ${p => p.theme.colors.accent};
  }
`;
export const PinterestIconStyled = styled(PinterestIcon)`
  fill: ${p => p.theme.colors.icons};
  &:hover {
    fill: ${p => p.theme.colors.accent};
  }
`;
