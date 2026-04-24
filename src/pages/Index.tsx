import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudyGroupOverview from "@/components/StudyGroupOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StudyGroupOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
