import { Fragment } from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/About_us";
import OurServices from "./components/Our_services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contact";
import NewsLetter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Features />
      <Testimonials />
      <ContactUs />
      <NewsLetter />
      <Footer />
    </Fragment>
  );
}

export default App;
