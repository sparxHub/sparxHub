"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import AppBar from "@components/components/molecules/AppBar";
import Footer from "@components/components/molecules/Footer";
import Sidebar from "@components/components/Sidebar";
import RightSidebar from "@components/components/RightSidebar";
import { H1, Button, Paragraph, ListGrid } from "@components/components/atoms";
import SectionTitle from "@components/components/molecules/SectionTitle";
import { Accordion, ContentPanel } from "@components/components/molecules/Accordion";
import { FaSmileBeam, FaLaughWink } from "react-icons/fa";

// images
import profileImg from "@/../public/img/Nadav_Photo_For_Site.png";
import logoImg from "@/../public/img/dev_sparx_logo.png";
import { getImageSrc, customLoader, isExportMode } from "@utils/imageUtils";

import Image from "next/image";

function LoadingGauge() {
  const logoImageSrc = getImageSrc(logoImg, "/img/dev_sparx_logo.png");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 5000); // Wait for 3 seconds before disappearing
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={logoImageSrc}
          loader={isExportMode ? customLoader : undefined}
          alt="Loading Logo"
          layout="fill"
          objectFit="contain"
          className="animate-bounce"
        />
      </div>
      <p className="text-2xl font-semibold">Loading your experience...</p>
    </div>
  );
}

function BookGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {items.map((book, index) => {
        const imageSrc = getImageSrc(null, book.image);
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-32 h-48 md:w-40 md:h-60">
              <Image
                src={imageSrc}
                loader={isExportMode ? customLoader : undefined}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h4 className="mt-4 text-center text-lg font-semibold text-primary-900">
              {book.title}
            </h4>
            <p className="text-center text-sm text-gray-600">{book.author}</p>
          </div>
        )
      }

      )}
    </div>
  );
}

function ProfileImage() {
  const imageSrc = getImageSrc(profileImg, "/img/Nadav_Photo_For_Site.png");


  return (
    <div className="flex flex-col items-center justify-start lg:items-start h-full">
      {/* Profile Image Container */}
      <div className="relative group w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-lg shadow-lg overflow-hidden">
        {/* Profile Image */}
        <Image
          src={imageSrc}
          loader={isExportMode ? customLoader : undefined}
          alt="Nadav Daniel"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-2"
        />
        {/* Yellow Color Overlay */}
        <div className="absolute inset-0 bg-yellow-500 opacity-40 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
      </div>

      {/* Icon and Caption */}
      <div className="mt-4 sm:mt-6 flex flex-col items-center lg:items-start space-y-2">
        <p className="text-gray-700 font-semibold text-xl">Always Curious</p>
        <p className="text-gray-500 text-sm">Developer</p>
      </div>
    </div>
  );
}

function splitHeadlineWithEffect(headline) {
  if (!headline.includes("\\")) {
    return headline; // Return as-is if no special marker
  }

  const parts = headline.split("\\"); // Split at the marker
  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        <span className="relative z-10">{parts[1]}</span>
        <svg
          className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-4/5 sm:w-full h-6 z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
        >
          <path
            d="M10 5 H90"
            stroke="#FFD700"
            strokeWidth="10"
            fill="none"
            strokeDasharray="80"
            strokeDashoffset="80"
            className="doodle-path"
          />
        </svg>
      </span>
    </>
  );
}


function Home() {
  const [heroData, setHeroData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);
  const [nowData, setNowData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
          throw new Error("Static data not found, attempting dynamic fetch...");
        }

        setHeroData(fetchedData.hero);
        setAboutData(fetchedData.about);
        setExperienceData(fetchedData.experience)
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
    <div className="flex flex-col min-h-screen bg-white pt-16">
      <AppBar
        sections={[
          { id: "about", title: "About" },
          { id: "experience", title: "Experience" },
          { id: "now", title: "Now" },
          { id: "contact", title: "Contact" },
        ]}
      />
      <div className="flex flex-1 justify-center">
        <Sidebar />
        <main className="container">
          {/* Hero Section */}
          <motion.section
            id="hero"
            className="flex flex-col items-center sm:items-start justify-center min-h-screen px-6 sm:px-20 bg-gradient-to-b"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            {/* Greeting */}
            <p className="text-greeny-900 text-center sm:text-left">{heroData.greeting}</p>

            {/* Full Name */}
            <h1 className="font-poppins-semi-bold text-yellow-500 text-4xl sm:text-6xl mt-2 text-center sm:text-left">
              {heroData.fullName}
            </h1>

            {/* Headline with Effect */}
            <h2 className="font-poppins-semi-bold text-greeny-900 text-3xl sm:text-6xl mt-2 whitespace-pre-line text-center sm:text-left relative">
              {splitHeadlineWithEffect(heroData.headline)}
            </h2>

            {/* Description */}
            <div className="mt-6 sm:w-4/6 lg:w-3/6 mx-auto sm:mx-0">
              <Paragraph
                markDefs={heroData.description.markDefs}
                boldClassName="font-poppins-semi-bold text-yellow-500"
                className="text-center sm:text-left"
              >
                {heroData.description.children}
              </Paragraph>
            </div>

            {/* Call-to-Action */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <Button href={heroData.cta.url} className="text-white bg-blue-500">
                {heroData.cta.title}
              </Button>
            </div>

            {/* Spacer */}
            <div className="md:col-span-12 min-h-[5rem]"></div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 justify-center min-h-[100vh] lg:min-h-[70vh] px-6 sm:px-20 scroll-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="hidden lg:block lg:col-span-1"></div>
            <div className="flex flex-col items-start justify-start lg:col-span-6">
              <SectionTitle number={1} title="About Me" />
              <div className="pt-4 space-y-6">
                {aboutData.content.map((paragraph, index) => (
                  <div key={index} className="text-gray-800">
                    {paragraph.children.map((child) => {
                      if (child.marks?.includes("strong")) {
                        return (
                          <strong key={child._key} className="text-yellow-500">
                            {child.text}
                          </strong>
                        );
                      }
                      return child.text;
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Technologies:</h3>
                <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
                  {aboutData.skills.map((skill, index) => (
                    <li key={index} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ProfileImage Container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-start">
              <ProfileImage />
            </div>
            {/* Spacer */}
            <div className="md:col-span-12 flex-grow min-h-[5rem]"></div>
          </motion.section>


          {/* Experience Section */}
          <motion.section
            id="experience"
            className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[100vh] lg:min-h-[60vh] px-6 sm:px-20 scroll-mt-16 content-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            {/* Section Title */}
            <div className="hidden md:block md:col-span-3"></div>
            <div className="sm:col-span-9">
              <SectionTitle number={2} title="Experience" />
            </div>

            {/* Side Tab Picker */}
            <div className="hidden md:block md:col-span-3"></div>
            <div className="hidden sm:block sm:col-span-3">
              <div className="space-y-6">
                {experienceData.content.map((job, index) => (
                  <button
                    key={index}
                    className={`w-full text-left py-4 pl-4 pr-2 font-semibold text-primary-800 transition-all duration-300 ${activeTab === index
                      ? "border-l-4 border-yellow-500 text-yellow-500"
                      : "hover:text-yellow-500"
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Content */}
            <div className="md:col-span-6">
              {experienceData.content.map((job, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 ${activeTab === index ? "block opacity-100" : "hidden opacity-0"
                    }`}
                >
                  {/* Company Name and Years */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary-900">{job.title}</h3>
                    {/* Job Title */}
                    <p className="text-xl font-semibold text-yellow-500">{job.jobTitle}</p>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-4">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        {/* Triangle Icon - Rotated */}
                        <div className="text-yellow-500 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 rotate-90"
                          >
                            <polygon points="12,2 2,22 22,22" />
                          </svg>
                        </div>
                        <span className="text-primary-900 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div className="md:col-span-12 flex-grow min-h-[5rem]"></div>
          </motion.section>


          {/* Now Section */}
          <motion.section
            id="now"
            className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[75vh] px-6 sm:px-20 scroll-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="hidden md:block md:col-span-1"></div>
            <div className="flex flex-col items-start justify-start md:col-span-9">
              <SectionTitle number={3} title="Now" />
              {nowData?.content.map((item, index) => {
                if (item._type === "paragraph") {
                  return (
                    <Paragraph key={index} markDefs={item?.markDefs}>
                      {item.children}
                    </Paragraph>
                  );
                } else if (item._type === "grid") {
                  return <BookGrid key={index} items={item.items} />;
                }
                return null;
              })}
            </div>
            <div className="hidden md:block md:col-span-1"></div>

            {/* Spacer */}
            <div className="md:col-span-12 flex-grow min-h-[5rem]"></div>
          </motion.section>
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
