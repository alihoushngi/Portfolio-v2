import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import TypingStyle from "@/components/Shared/TypingStyle/TypingStyle";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Frontend Developer",
};

const page = () => {
  return (
    <>
      <Navbar />
      <Layout customClass="flex-row max-sm:flex-col-reverse">
        <div className="flex justify-center items-center text-center w-fit  text-xl select-none">
          <TypingStyle>
            I am working hard to bring you valuable content. Please revisit this
            page shortly.
          </TypingStyle>
        </div>
      </Layout>
    </>
  );
};

export default page;
