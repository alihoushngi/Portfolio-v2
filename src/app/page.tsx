import Layout from "@/components/Base/Layout/Layout";
import Navbar from "@/components/Base/Navbar/Navbar";
import MainTopSectionWrapper from "@/components/Base/Main/MainTopSectionWrapper/MainTopSectionWrapper";
import MainBottomSectionWrapper from "@/components/Base/Main/MainBottomSectionWrapper/MainBottomSectionWrapper";
import DownNotice from "@/components/Shared/DownNotice/DownNotice";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout customClass="flex-col">
        <div className="sm:hidden fixed bottom-14 right-14 z-50">
          <DownNotice />
        </div>
        <MainTopSectionWrapper />
        <MainBottomSectionWrapper />
      </Layout>
    </main>
  );
}
