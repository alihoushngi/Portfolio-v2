import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import InfoPhoto from "@/components/Shared/InfoPage/InfoPhoto/InfoPhoto";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <InfoPhoto />
      </Layout>
    </>
  );
};

export default page;
