import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import SwipperCustom from "../../SwipperCustom/SwipperCustom";
import ContactIcons from "../../ContactIcons/ContactIcons";
import Telegram from "../../../../../public/static/images/telegramMessage.png";
import Instagram from "../../../../../public/static/images/instagramMessage.png";
import Whatsapp from "../../../../../public/static/images/whatsappIcon.png";
import Linkedin from "../../../../../public/static/images/linkedinMessage.png";
import Gmail from "../../../../../public/static/images/gmailMessage.png";

const ContactList = [
  {
    name: "Telegram",
    Link: "https://t.me/Alihoushangi",
    Icon: Telegram,
  },
  {
    name: "Instagram",
    Link: "https://www.instagram.com/alihoushngii/",
    Icon: Instagram,
  },
  {
    name: "Whatsapp",
    Link: "https://wa.me/989039539334",
    Icon: Whatsapp,
  },
  {
    name: "Linkedin",
    Link: "https://www.linkedin.com/in/alihoushangi/",
    Icon: Linkedin,
  },
  {
    name: "Gmail",
    Link: "mailto:alihoushngi@gmail.com",
    Icon: Gmail,
  },
];

const InfoContact = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full h-[36%]"
      cardCustomStyle="w-full min-h-auto flex gap-5 p-2 m-0 justify-center items-center"
    >
      {ContactList.map((item, index) => {
        return (
          <ContactIcons
            key={index}
            SocialLink={item.Link}
            SocialIconSrc={item.Icon}
            SocialIconAlt={item.name}
            SocialIconWidth={25}
            SocialIconheight={25}
          />
        );
      })}
      <div className=""></div>
    </CardContainer>
  );
};

export default InfoContact;
