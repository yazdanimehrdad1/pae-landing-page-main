import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SelectedProjects from "@/components/SelectedProjects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <SelectedProjects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
