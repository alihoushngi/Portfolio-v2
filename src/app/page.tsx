import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import TopSectionWrapper from "@/components/Base/TopSectionWrapper/TopSectionWrapper";
import BottomSectionWrapper from "@/components/Base/BottomSectionWrapper/BottomSectionWrapper";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout>
        <TopSectionWrapper />
        <BottomSectionWrapper />
      </Layout>
    </main>
  );
}
