import React from "react";
import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import ProjectLeftSectionWrapper from "@/components/Base/Project/ProjectLeftSectionWrapper/ProjectLeftSectionWrapper";
import ProjectRightSectionWrapper from "@/components/Base/Project/ProjectRightSectionWrapper/ProjectRightSectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "Frontend Developer",
};

const page = () => {
  return (
    <>
      <Navbar />
      <Layout customClass="flex-row max-sm:flex-col-reverse">
        <ProjectLeftSectionWrapper />
        <ProjectRightSectionWrapper />
      </Layout>
    </>
  );
};

export default page;
