import React from "react";
import Navbar from "./components/user/Navbar";
import Hero from "./components/user/Hero";
import WhyChoose from "./components/user/WhyChoose";
import FeaturedProfiles from "./components/user/FeaturedProfiles";
import Footer from "./components/user/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <WhyChoose />
       <FeaturedProfiles />
          <Footer />
    </>
  );
}

export default App;