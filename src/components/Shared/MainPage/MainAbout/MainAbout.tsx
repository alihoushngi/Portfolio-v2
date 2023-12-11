import React from "react";
import Logo from "../../../../../public/static/images/logow2.png";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Link from "next/link";
import Image from "next/image";

const MainAbout = () => {
  return (
    <CardContainer containerStyle="w-[49%] flex items-stretch max-md:w-full">
      <div className="flex justify-between flex-col relative w-full max-w-full h-full overflow-x-hidden">
        <Link
          href="/about"
          className="absolute left-0 top-0 rounded-[30px] w-full h-full opacity-0 z-10"
          aria-label="Ali houshangi about page Link in main about"
        />
        <div className="w-[80%] overflow-hidden flex-none p-4 my-auto mx-5 max-2l:w-[60%] max-2l:m-auto max-l:w-56 max-sm:mb-5 max-sm:w-56">
          <Image
            priority
            src={Logo}
            alt="logo"
            className="block h-auto object-cover w-full max-w-full border-none rounded-none shadow-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-xs font-light">MORE ABOUT ME</h3>
            <h2 className="text-xl font-bold text-white">About</h2>
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

export default MainAbout;
