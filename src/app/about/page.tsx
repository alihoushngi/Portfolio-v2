import React from "react";
import InfoBottomSectionWrapper from "@/components/Base/Info/InfoBottomSectionWrapper/InfoBottomSectionWrapper";
import InfoTopSectionWrapper from "@/components/Base/Info/InfoTopSectionWrapper/InfoTopSectionWrapper";
import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Frontend Developer",
};

const page = () => {
  return (
    <>
      <Navbar />
      <Layout customClass="flex-col">
        <InfoTopSectionWrapper />
        <InfoBottomSectionWrapper />
      </Layout>
    </>
  );
};

export default page;
