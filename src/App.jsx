import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="font-sans pt-20">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tools />
      <Portfolio />
      <Footer />
      <ScrollToTop />

      <Analytics />
      <SpeedInsights />

    </div>
  );
}

export default App;