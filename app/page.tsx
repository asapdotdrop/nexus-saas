"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import WorkflowDemo from "@/components/WorkflowDemo";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import NoiseTexture from "@/components/NoiseTexture";
import CustomCursor from "@/components/CustomCursor";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loader always on top */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* 3D background behind everything */}
      <Background3D />

      {/* Grain overlay */}
      <NoiseTexture />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content — revealed after load */}
      {loaded && (
        <div className="relative" style={{ zIndex: 10 }}>
          <Navigation />
          <main>
            <Hero />
            <Stats />
            <Features />
            <Quote />
            <WorkflowDemo />
            <Pricing />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
