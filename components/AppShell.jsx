"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import IntroLoader from "@/components/IntroLoader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function AppShell({ children }) {
  // null = "haven't checked sessionStorage yet" — avoids a flash of the
  // loader on client-side route changes where it shouldn't show at all.
  const [showLoader, setShowLoader] = useState(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("spacera-intro-seen");

    // Defer the execution block out of the synchronous render pass
    requestAnimationFrame(() => {
      setShowLoader(!seen);
    });
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("spacera-intro-seen", "1");
    setShowLoader(false);
  };
  if (showLoader === null) {
    return <div className="min-h-screen bg-wall" />;
  }
  return (
    <>
      <SmoothScrollProvider>
        {showLoader && <IntroLoader onComplete={handleLoaderComplete} />}
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
