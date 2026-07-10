"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DSAJourney from "@/components/DSAJourney";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <div className="noise" />
      <CustomCursor />
      <Navbar />
      <main className={loaded ? "" : "h-screen overflow-hidden"}>
        <Hero />
        <About />
        <DSAJourney />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
