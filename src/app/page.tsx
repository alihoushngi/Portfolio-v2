import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import MainTopSectionWrapper from "@/components/Base/Main/MainTopSectionWrapper/MainTopSectionWrapper";
import MainBottomSectionWrapper from "@/components/Base/Main/MainBottomSectionWrapper/MainBottomSectionWrapper";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout customClass="flex-col">
        <MainTopSectionWrapper />
        <MainBottomSectionWrapper />
      </Layout>
    </main>
  );
}
