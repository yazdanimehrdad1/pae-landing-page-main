import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SelectedProjects from "@/components/SelectedProjects";
import EngineeringConcept from "@/components/EngineeringConcept";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EngineeringConcept />
      <Services />
      <SelectedProjects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
