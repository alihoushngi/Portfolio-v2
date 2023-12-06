import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import ContactIcons from "../../ContactIcons/ContactIcons";
import { ContactList } from "./InfoContactList";

const InfoContact = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full h-[36%] max-md:mb-20"
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
    </CardContainer>
  );
};

export default InfoContact;
