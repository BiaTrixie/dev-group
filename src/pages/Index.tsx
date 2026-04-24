import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lessons from "@/components/Lessons";
import Interaction from "@/components/Interaction";
import SubmitChallenge from "@/components/SubmitChallenge";
import FinalProject from "@/components/FinalProject";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Lessons />
        <Interaction />
        <SubmitChallenge />
        <FinalProject />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
