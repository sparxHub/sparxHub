"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import AppBar from "@components/components/molecules/AppBar";
import Footer from "@components/components/molecules/Footer";
import Sidebar from "@components/components/Sidebar";
import RightSidebar from "@components/components/RightSidebar";
import { H1, Button, Paragraph, ListGrid } from "@components/components/atoms";
import SectionTitle from "@components/components/molecules/SectionTitle";
import { Accordion, ContentPanel } from "@components/components/molecules/Accordion";

function LoadingGauge() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <img src="/logo.png" alt="Loading Logo" className="w-24 h-24 animate-bounce mb-4" />
      <p className="text-2xl font-semibold">Loading your experience...</p>
    </div>
  );
}

function Home() {
  const [heroData, setHeroData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [nowData, setNowData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData = null;

        const response = await fetch("/staticData.json");
        if (response.ok) {
          fetchedData = await response.json();
          console.log("Static data fetched:", fetchedData);
        } else {
          console.warn("Static data not found, attempting dynamic fetch...");
          if (!isExportMode) {
            fetchedData = {
              hero: await sanityClient.fetch('*[_type == "hero"][0]'),
              about: await sanityClient.fetch('*[_type == "about"][0]'),
              now: await sanityClient.fetch('*[_type == "now"][0]'),
            };
            console.log("Dynamic data fetched:", fetchedData);
          } else {
            throw new Error("Data could not be fetched in export mode.");
          }
        }

        setHeroData(fetchedData.hero);
        setAboutData(fetchedData.about);
        setNowData(fetchedData.now);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isExportMode]);

  if (isLoading || !heroData) {
    return <LoadingGauge />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AppBar />
      <div className="flex flex-1 justify-center">
        <Sidebar />
        <main className="container">
          {/* Hero Section */}
          <section className="flex flex-col items-start justify-center min-h-screen px-6 sm:px-20 bg-gradient-to-b">
            <p className="text-greeny-900">{heroData.greeting}</p>
            <h1 className="font-poppins-semi-bold text-yellow-500 text-6xl mt-1">{heroData.fullName}</h1>
            <h2 className="font-poppins-semi-bold text-greeny-900 mt-1 text-6xl whitespace-pre-line">
              {heroData.headline}
            </h2>
            <div className="mt-6 sm:w-4/6 lg:w-3/6">
              <Paragraph markDefs={heroData.description.markDefs} boldClassName="font-poppins-semi-bold text-yellow-500">
                {heroData.description.children}
              </Paragraph>
            </div>
            <div className="mt-6">
              <Button href={heroData.cta.url} className="text-white bg-blue-500">
                {heroData.cta.title}
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 justify-center min-h-[75vh] px-6 sm:px-20">
            <div className="hidden md:block md:col-span-1"></div>
            <div className="flex flex-col items-start justify-start md:col-span-6">
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
            <div className="hidden md:flex md:col-span-5 items-center justify-center">
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </div>
            <div className="hidden md:block md:col-span-1"></div>
          </section>

          {/* Experience Section */}
          <section className="grid grid-cols-1 sm:grid-cols-12 gap-4 min-h-[75vh] px-6 sm:px-20">
            <div className="hidden sm:block sm:col-span-3"></div>
            <div className="items-start justify-start sm:col-span-6">
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
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[75vh] px-6 sm:px-20">
            <div className="hidden md:block md:col-span-1"></div>
            <div className="flex flex-col items-start justify-start md:col-span-6">
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
