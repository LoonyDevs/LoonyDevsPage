// puts the page together

import SiteFooter from "@/components/layout/site-footer";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import Intro from "@/components/sections/intro";
import WorkSection from "@/components/sections/work-section";

const HomePage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        <Intro />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default HomePage;
