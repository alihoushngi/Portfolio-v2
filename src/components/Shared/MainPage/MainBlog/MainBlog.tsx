import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogIcon from "../../../../../public/static/images/BlogIcon.png";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const MainBlog = () => {
  return (
    <CardContainer containerStyle="max-h-full h-full flex items-stretch">
      <div className="transition-all duration-700 flex justify-between flex-col relative w-full max-w-full h-full overflow-x-hidden grayscale hover:grayscale-0 z-50">
        <Link
          href="/blog"
          className="absolute left-0 top-0 rounded-[30px] w-full h-full opacity-0 z-10"
          aria-label="Ali houshangi blog page Link in main about"
        />
        <div className="relative overflow-hidden flex-none p-4 m-auto">
          <Image
            priority
            src={BlogIcon}
            alt="blog icon"
            width={80}
            className="block h-auto object-cover w-full max-w-full border-none rounded-none shadow-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-xs font-light">MY BLOGS EVRYONE NEED</h3>
            <h2 className="text-xl font-bold text-white">Blog</h2>
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

export default MainBlog;
