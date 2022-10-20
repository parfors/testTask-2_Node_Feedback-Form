import styled from 'styled-components';
import yellowSmile from 'images/group.png';
import earth from 'images/mask_group.png';
import pinkSmile from 'images/red_cartoon.png';
import yellowSmileTop from 'images/yellowSmileTop.png';
import ellipse from 'images/ellipse31.png';
import firstCloud from 'images/cloud1.png';
import secondCloud from 'images/cloud2.png';
import thirdCloud from 'images/cloud3.png';
import fourthCloud from 'images/cloud4.png';
import fifthCloud from 'images/cloud5.png';
import sixthCloud from 'images/cloud6.png';
import seventhCloud from 'images/cloud7.png';
import eighthCloud from 'images/cloud8.png';
import ninthCloud from 'images/cloud7.png';

export const SectionStyled = styled.section`
  background-color: ${p => p.theme.colors.white};
  background-image: url(${yellowSmile}), url(${pinkSmile}),
    url(${yellowSmileTop}), url(${earth}), url(${ellipse}), url(${firstCloud}),
    url(${secondCloud}), url(${thirdCloud}), url(${fourthCloud}),
    url(${fifthCloud}), url(${sixthCloud}), url(${seventhCloud}),
    url(${eighthCloud}), url(${ninthCloud});
  background-repeat: no-repeat;
  background-position: 76% 55%, 83% 72%, 29px 23px, 100% 0, 60% 5%, 73% 75%,
    3% 87%, 7% 107%, 80% 15%, 14% 85%, 0 50%, 50% 30%, 0 27%, 40% 20%;
`;

export const ContainerStyled = styled.div`
  padding-top: 179px;
  padding-left: 10px;
  padding-bottom: 174px;
  padding-right: 10px;
  @media screen and (max-width: 900px) {
    & {
      max-width: 900px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
