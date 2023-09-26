import ContactWrapperLeftSide from "@/components/Base/Contact/ContactWrapperLeftSide/ContactWrapperLeftSide";
import ContactWrapperRightSide from "@/components/Base/Contact/ContactWrapperRightSide/ContactWrapperRightSide";
import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <ContactWrapperLeftSide />
        <ContactWrapperRightSide />
      </Layout>
    </>
  );
};

export default page;
