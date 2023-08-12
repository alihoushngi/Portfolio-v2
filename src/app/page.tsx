import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import FirstSectionWrapper from "@/components/Base/SectionWrapper/FirstSectionWrapper";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout>
        <FirstSectionWrapper />
      </Layout>
    </main>
  );
}
