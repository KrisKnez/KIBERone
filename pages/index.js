import Header from "/components/organisms/Header";

import Hero from "/components/sections/Hero";
import Stats from "/components/sections/Stats";
import Cards from "/components/sections/Cards";
import Sponsors from "/components/sections/Sponsors";
import Location from "/components/sections/Location";
import Contact from "components/sections/Contact";
import Footer from "components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Header + Hero = 100vh */}
      <div className="flex flex-col min-h-screen space-y-12">
        <Header />
        <Hero className="grow my-0"/>
      </div>
      <Stats />
      <Cards />
      <Sponsors />
      <Location />
      <Contact/>
      <Footer/>
    </>
  );
}
