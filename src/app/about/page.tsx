import InfoBottomSectionWrapper from "@/components/Base/InfoBottomSectionWrapper/InfoBottomSectionWrapper";
import InfoTopSectionWrapper from "@/components/Base/InfoTopSectionWrapper/InfoTopSectionWrapper";
import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <InfoTopSectionWrapper />
        <InfoBottomSectionWrapper />
      </Layout>
    </>
  );
};

export default page;
