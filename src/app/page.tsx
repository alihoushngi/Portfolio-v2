import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import SectionWrapper from "@/components/Base/SectionWrapper/SectionWrapper";
import Info from "@/components/Shared/Info/Info";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout>
        <SectionWrapper>
          <Info />
        </SectionWrapper>
      </Layout>
    </main>
  );
}
