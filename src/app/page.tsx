import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import MainTopSectionWrapper from "@/components/Base/MainTopSectionWrapper/MainTopSectionWrapper";
import MainBottomSectionWrapper from "@/components/Base/MainBottomSectionWrapper/MainBottomSectionWrapper";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout>
        <MainTopSectionWrapper />
        <MainBottomSectionWrapper />
      </Layout>
    </main>
  );
}
