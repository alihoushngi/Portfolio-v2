import React from "react";

import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import ContactIcons from "../../ContactIcons/ContactIcons";
import Link from "next/link";
import { ContactList } from "./MainContactList";

const MainContact = () => {
  return (
    <CardContainer containerStyle="max-h-full h-full flex items-stretch">
      <div className="transition-all duration-700 flex justify-between flex-col relative w-full max-w-full h-full overflow-x-hidden grayscale hover:grayscale-0 z-50">
        <Link
          title="ali houshangi contact page"
          href="/contact"
          className="absolute left-0 top-0 rounded-[30px] w-full h-full opacity-0 z-10"
          aria-label="Ali houshangi contact page Link in main about"
        />
        <div className="relative overflow-hidden flex justify-evenly w-full p-4 m-auto">
          {ContactList.map((item, index) => {
            return (
              <ContactIcons
                key={index}
                SocialLink={item.Link}
                SocialIconSrc={item.Icon}
                SocialIconAlt={item.name}
                SocialIconWidth={25}
                SocialIconheight={25}
                SocialAriaLable={item.ariaLable}
              />
            );
          })}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-xs font-light">CALL ME</h3>
            <h2 className="text-xl font-bold text-white">Contact</h2>
          </div>
          <button
            type="button"
            className="transition-all duration-300 ease-in font-thin text-[10px] border rounded-[10px] border-gray-500 p-[5px] z-50 hover:text-xs hover:font-bold hover:text-white"
          >
            {"-->"}
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default MainContact;
