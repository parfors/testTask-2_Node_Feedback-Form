import React from 'react';
import {
  FooterContainer,
  FooterStyled,
  LinkedInIconStyled,
  PinterestIconStyled,
  TwitterIconStyled,
  FaceBookIconStyled,
  LinkList,
  LinkItem,
  LinkStyled,
} from 'components';

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <FooterContainer>
          <LinkList>
            <LinkItem>
              <LinkStyled
                href="https://www.linkedin.com/in/oleksandr-suprun/"
                target="_blank"
              >
                <LinkedInIconStyled />
              </LinkStyled>
            </LinkItem>
            <LinkItem>
              <LinkStyled
                href="https://www.facebook.com/profile.php?id=100010296572815"
                target="_blank"
              >
                <FaceBookIconStyled />
              </LinkStyled>
            </LinkItem>
            <LinkItem>
              <LinkStyled
                href="https://twitter.com/home?lang=uk"
                target="_blank"
              >
                <TwitterIconStyled />
              </LinkStyled>
            </LinkItem>
            <LinkItem>
              <LinkStyled href="https://www.pinterest.ca/" target="_blank">
                <PinterestIconStyled />
              </LinkStyled>
            </LinkItem>
          </LinkList>
        </FooterContainer>
      </FooterStyled>
    </>
  );
}
