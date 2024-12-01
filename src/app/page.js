"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import AppBar from "@components/components/molecules/AppBar";
import Footer from "@components/components/molecules/Footer";
import Sidebar from "@components/components/Sidebar";
import RightSidebar from "@components/components/RightSidebar";
import { H1, H3, Button, Paragraph, ListGrid } from "@components/components/atoms";
import SectionTitle from "@components/components/molecules/SectionTitle";
import { Accordion, ContentPanel } from "@components/components/molecules/Accordion";


let sanityClient; // Declare sanityClient

// Conditionally import sanityClient
if (process.env.NEXT_PUBLIC_EXPORT_MODE !== "true") {
  sanityClient = require("../../sanity/lib/client").client;
}


function Home() {
  const [heroData, setHeroData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [nowData, setNowData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";

  useEffect(() => {
    const fetchStaticData = async () => {
      try {
        const response = await fetch("/staticData.json");
        if (!response.ok) {
          throw new Error("Static data not found. Falling back to dynamic fetch.");
        }
        const data = await response.json();
        setHeroData(data.hero);
        setAboutData(data.about);
        setNowData(data.now);
      } catch (error) {
        console.error(error.message);
        if (!isExportMode) {
          fetchDynamicData(); // Only fetch dynamically if not in export mode
        }
      } finally {
        setIsLoading(false);
      }
    };

    const fetchDynamicData = async () => {
      try {
        console.log("Fetching data dynamically from Sanity...");
        const hero = await sanityClient.fetch('*[_type == "hero"][0]');
        const about = await sanityClient.fetch('*[_type == "about"][0]');
        const now = await sanityClient.fetch('*[_type == "now"][0]');
        setHeroData(hero);
        setAboutData(about);
        setNowData(now);
      } catch (error) {
        console.error("Error fetching data dynamically:", error);
      }
    };

    fetchStaticData(); // Static fetch with fallback
  }, [isExportMode]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AppBar />
      <div className="flex flex-1 justify-center">
        <Sidebar />
        <main className="container">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full items-center justify-center sm:w-4/6 lg:w-3/6 p-4 sm:p-4">
              {isLoading ? (
                <H3>Loading ... </H3>
              ) : (
                <Paragraph>
                  {heroData?.welcomeSentence}{" "}
                  <span className="font-poppins-semi-bold text-yellow-500 text-xl sm:text-2xl">
                    {heroData?.welcomeFullName}
                  </span>
                </Paragraph>
              )}
              <div className="!mb-3">
                <H1 className="line-height-1 text-center">
                  {heroData?.welcomeSlogan || <Skeleton />}
                </H1>
              </div>
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                heroData?.welcomeBody?.map((paragraph, index) => (
                  <Paragraph key={index} className="text-justify" boldClassName="text-yellow-500">
                    {paragraph.children}
                  </Paragraph>
                ))
              )}
              {heroData?.welcomeCTA && (
                <div className="flex items-center justify-center">
                  <div className="w-[250px]">
                    <Button
                      icon="ArrowDownTray"
                      fullWidth
                      onClick={() => alert("Button was clicked!")}
                    >
                      {heroData.welcomeCTA.title}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* About Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="hidden md:block md:col-span-1"></div>
            <div className="flex flex-col items-start justify-start p-4 md:col-span-6">
              <SectionTitle number={1} title="About" />
              <div className="pt-4 md:hidden flex items-center justify-center">
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
              </div>
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                aboutData?.content?.map((paragraph, index) => (
                  <Paragraph key={index} boldClassName="text-yellow-500">
                    {paragraph.children}
                  </Paragraph>
                ))
              )}
              {isLoading ? <Skeleton /> : <ListGrid items={aboutData?.skills} columns={2} />}
            </div>
            <div className="hidden md:flex md:col-span-5 p-4 items-center justify-center">
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </div>
            <div className="hidden md:block md:col-span-1"></div>
          </section>

          {/* Experience Section */}
          <section className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="hidden sm:block sm:col-span-3"></div>
            <div className="items-start justify-start p-4 sm:col-span-6">
              <SectionTitle number={2} title="Experience" />
              <Accordion
                tabs={[
                  {
                    title: "Tab 1",
                    jobTitle: "Tab 1 - Freelance Developer",
                    jobDetails: "July 2021 - Present",
                    content: (
                      <ContentPanel
                        title="Software Developer"
                        subtitle="TEST"
                        contentLinks="https://www.Test.com/"
                        list={[
                          "Responsible for Spring MVC & Maven development.",
                          "Enhanced API design.",
                        ]}
                      />
                    ),
                  },
                ]}
              />
            </div>
            <div className="hidden sm:block sm:col-span-3"></div>
          </section>

          {/* Now Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="hidden md:block md:col-span-1"></div>
            <div className="flex flex-col items-start justify-start p-4 md:col-span-6">
              <SectionTitle number={3} title="Now" />
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                nowData?.content?.map((paragraph, index) => (
                  <Paragraph key={index} markDefs={paragraph?.markDefs}>
                    {paragraph.children}
                  </Paragraph>
                ))
              )}
            </div>
            <div className="hidden md:block md:col-span-1"></div>
          </section>
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
