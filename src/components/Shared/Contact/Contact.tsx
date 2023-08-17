import React from "react";
import {
  ContactSochial,
  ContactSocialWrapperStyle,
  ContactInfoButtonStyle,
  ContactInfoButtonWrapperStyle,
  ContactInfoDescribeStyle,
  ContactInfoSyle,
  ContactInfoTitleStyle,
  ContactInfoWrapperStyle,
  ContactLink,
  ContactWrapper,
  SocialImageWrapperStyle,
} from "./ContactStyle";
import ContactContainer from "@/components/Containers/ContactContainer/ContactContainer";
import Telegram from "../../../../public/static/images/telegramMessage.png";
import Instagram from "../../../../public/static/images/instagramMessage.png";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactLink href="#" />
        <ContactSocialWrapperStyle>
          <SocialImageWrapperStyle>
            <ContactSochial
              priority
              src={Telegram}
              alt="telegram"
              width={25}
              height={25}
            />
          </SocialImageWrapperStyle>
          <SocialImageWrapperStyle>
            <ContactSochial
              priority
              src={Instagram}
              alt="instagram"
              width={25}
              height={25}
            />
          </SocialImageWrapperStyle>
        </ContactSocialWrapperStyle>
        <ContactInfoWrapperStyle>
          <ContactInfoSyle>
            <ContactInfoDescribeStyle>CALL ME</ContactInfoDescribeStyle>
            <ContactInfoTitleStyle>Contact</ContactInfoTitleStyle>
          </ContactInfoSyle>
          <ContactInfoButtonWrapperStyle>
            <ContactInfoButtonStyle>{"-->"}</ContactInfoButtonStyle>
          </ContactInfoButtonWrapperStyle>
        </ContactInfoWrapperStyle>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
