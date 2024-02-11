"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { client as sanityClient } from "../../sanity/lib/client";
import AppBar from "@components/components/molecules/AppBar";
import Footer from "@components/components/molecules/Footer";
import Sidebar from "@components/components/Sidebar";
import RightSidebar from "@components/components/RightSidebar";
import {
  H1,
  H2,
  H3,
  Button,
  Paragraph,
  Icon,
  ListGrid,
} from "@components/components/atoms";
import { renderToString } from "react-dom/server";
import SectionTitle from "@components/components/molecules/SectionTitle";
import {
  Accordion,
  Accordion2,
  ContentPanel,
} from "@components/components/molecules/Accordion";

import RootLayout from "./layout";

function Home() {
  const [heroData, setHeroData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [nowData, setNowData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("mainPageData");
    const cachedTimestamp = localStorage.getItem("mainPageTimestamp");
    const isDataValid =
      cachedTimestamp && new Date() - new Date(cachedTimestamp) < 86400000; // 1 day in milliseconds

    console.log("cachedData:", cachedData);
    console.log("cachedTimestamp:", cachedTimestamp);
    console.log("isDataValid:", isDataValid);

    if (cachedData && isDataValid) {
      const parsedCachedData = JSON.parse(cachedData);
      setHeroData(parsedCachedData["hero"]);
      setAboutData(parsedCachedData["about"]);
      setNowData(parsedCachedData["now"]);
      setIsLoading(false);
    } else {
      fetchMainPageData();
    }
  }, []);

  const fetchDataFromSanity = async () => {
    try {
      console.log("Fetching data from Sanity...");
      const hero = await sanityClient.fetch(`*[_type == "hero"][0]`);
      const about = await sanityClient.fetch(`*[_type == "about"][0]`);
      const now = await sanityClient.fetch(`*[_type == "now"][0]`);

      const data = { hero, about, now };
      console.log("Data fetched from Sanity: ", data);
      return data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching data from Sanity: ", error);
      return null; // Return null in case of an error
    }
  };

  const fetchMainPageData = async () => {
    setIsLoading(true);
    console.log("Starting to fetch hero data...");
    const newData = await fetchDataFromSanity();
    if (newData) {
      // Check if newData is not null
      console.log("New data retrieved, updating localStorage and state...");
      localStorage.setItem("mainPageData", JSON.stringify(newData));
      localStorage.setItem("mainPageTimestamp", new Date().toISOString());
      setHeroData(newData["hero"]);
      setAboutData(newData["about"]);
      setNowData(newData["now"]);
    } else {
      console.log("No data retrieved from Sanity.");
    }
    setIsLoading(false);
    console.log("Fetching hero data complete.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AppBar />
      <div className="flex flex-1 justify-center">
        <Sidebar />
        <main className="container">
          {/* Hero | Section */}
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
                  {isLoading ? <Skeleton /> : heroData?.welcomeSlogan}
                </H1>
              </div>{" "}
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                heroData?.welcomeBody?.map((paragraph, index) => (
                  <Paragraph
                    key={index}
                    className="text-justify"
                    boldClassName="text-yellow-500"
                  >
                    {paragraph.children}
                  </Paragraph>
                ))
              )}
              {isLoading ? (
                <Skeleton />
              ) : (
                heroData?.welcomeCTA && (
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
                )
              )}
            </div>
          </section>

          {/* 01. About | Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left spacing div, takes no space on mobile */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Main content div, takes full width on mobile */}
            <div className="flex flex-col items-start justify-start p-4 md:col-span-6">
              <SectionTitle number={1} title="About" />
              {/* Image div, shown below the content on mobile */}
              <div className="pt-4 md:hidden flex items-center justify-center">
                {/* Placeholder Image */}
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
              </div>
              {/* Content paragraphs */}
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                <div>
                  {aboutData?.content.map((paragraph, index) => (
                    <Paragraph key={index} boldClassName="text-yellow-500">
                      {paragraph.children}
                    </Paragraph>
                  ))}
                </div>
              )}
              {/* Skills list grid */}
              {isLoading ? (
                <Skeleton />
              ) : (
                <ListGrid items={aboutData?.skills} columns={2} />
              )}
            </div>

            {/* Right content div with image, hidden on mobile */}
            <div className="hidden md:flex md:col-span-5 p-4 items-center justify-center">
              {/* Placeholder Image */}
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </div>

            {/* Right spacing div, takes no space on mobile */}
            <div className="hidden md:block md:col-span-1"></div>
          </section>

          {/* 02. Experience | Section */}
          <section className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Left spacing div, hidden on mobile */}
            <div className="hidden sm:block sm:col-span-3"></div>

            {/* Main content div, takes full width on mobile */}
            <div className="items-start justify-start p-4 sm:col-span-6">
              <SectionTitle number={2} title="Experience" />
              <Accordion
                tabs={[
                  {
                    title: "Tab 1",
                    jobTitle: "Tab 1 - Freelance Spring MVC & Maven",
                    jobDetails: "July 2021 - Present",
                    content: (
                      <ContentPanel
                        title="Software Developer"
                        subtitle="TEST"
                        contentLinks="https://www.Test.com/"
                        list={[
                          "Responsible for code Spring MVC & Maven. (Oct 2021 - present)",
                          "PartSpring MVC & Maven.",
                        ]}
                      />
                    ),
                  },
                  {
                    title: "Tab 2 2 long",
                    jobTitle: "Tab 2 -Freelance Spring MVC & Maven",
                    jobDetails: "July 2021 - Present",
                    content: (
                      <ContentPanel
                        title="Software Developer"
                        subtitle="TEST"
                        contentLinks="https://www.Test.com/"
                        list={[
                          "Responsible for code Spring MVC & Maven. (Oct 2021 - present)",
                          "PartSpring MVC & Maven.",
                        ]}
                      />
                    ),
                  },
                  {
                    title: "Tab 3 long",
                    jobTitle: "Tab 2 -Freelance Spring MVC & Maven",
                    jobDetails: "July 2021 - Present",
                    content: (
                      <ContentPanel
                        title="Software Developer"
                        subtitle="TEST"
                        contentLinks="https://www.Test.com/"
                        list={[
                          "Responsible for code Spring MVC & Maven. (Oct 2021 - present)",
                          "PartSpring MVC & Maven.",
                        ]}
                      />
                    ),
                  },
                  {
                    title: "Pepper",
                    jobTitle: "Freelance Spring MVC & Maven",
                    jobDetails: "July 2021 - Present",
                    content: (
                      <ContentPanel
                        title="Software Developer"
                        subtitle="TEST"
                        contentLinks="https://www.Test.com/"
                        list={[
                          "Responsible for code Spring MVC & Maven. (Oct 2021 - present)",
                          "PartSpring MVC & Maven.",
                        ]}
                      />
                    ),
                  },
                ]}
              />
            </div>

            {/* Right spacing div, hidden on mobile */}
            <div className="hidden sm:block sm:col-span-3"></div>
          </section>

          {/* 03. Now | Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left spacing div, takes no space on mobile */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Main content div, takes full width on mobile */}
            <div className="flex flex-col items-start justify-start p-4 md:col-span-6">
              <SectionTitle number={3} title="Now" />

              {/* Content paragraphs */}
              {isLoading ? (
                <Skeleton count={5} />
              ) : (
                <div>
                  {nowData?.content.map((paragraph, index) => (
                    <Paragraph markDefs={paragraph?.markDefs} key={index}>
                      {paragraph.children}
                    </Paragraph>
                  ))}
                </div>
              )}

              {/* <Paragraph>
                <strong>
                  <i>What I&apos;m Up To</i>
                </strong>{" "}
                -<i>Inspired by a great idea from Derek Sivers</i>
              </Paragraph>

              <Paragraph>
                Right now, my main focus is on creating a new Online Scheduling
                System and reservation software, using the magic of AI to make
                life easier for business owners and offer the latest digital
                experiences. We&apos;re starting with small fitness studios, but
                we have big plans to expand to other industries in the future.
              </Paragraph>

              <Paragraph>
                I&apos;m also busy with web development projects for some
                fantastic clients. If you need something built, just drop me an
                email at{" "}
                <a
                  href="mailto:nadavdaniel@hotmail.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  nadavdaniel@hotmail.com
                </a>
                .
              </Paragraph>

              <Paragraph>
                I&apos;m always eager to learn, especially when it comes to new
                technologies. I like to get my hands dirty and take notes using
                tools like Trello and Notion. Currently, I&apos;m working on
                improving my skills in both frontend and backend web
                development. I have over 20 years of experience developing
                internal business applications.
              </Paragraph>

              <Paragraph>
                Lastly, I&apos;m an enthusiastic reader, and I highly recommend
                the book &quot;Anything You Want&quot; by Derek Sivers for some
                great insights.
              </Paragraph>

              <Paragraph className="text-gray-500">
                (Last updated: Oct 2023)
              </Paragraph> */}
            </div>

            {/* Image div, shown below the content on mobile */}
            <div className="pt-4 md:hidden flex items-center justify-center">
              {/* Placeholder for any mobile specific content or image */}
            </div>

            {/* Right content div, possibly for an image or additional content, hidden on mobile */}
            <div className="hidden md:flex md:col-span-5 p-4 items-center justify-center">
              {/* Placeholder Image or Content */}
            </div>

            {/* Right spacing div, takes no space on mobile */}
            <div className="hidden md:block md:col-span-1"></div>
          </section>

          {/* 04. Contact | Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center text-center">
            {/* Left spacing div, takes no space on mobile */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Main content div, takes full width on mobile */}
            <div className="flex flex-col items-center justify-center p-4 md:col-span-10">
              <SectionTitle number={4} title="Contact" />

              <h3 className="mt-3 text-2xl font-bold">
                Please say Hi! I’d love to hear from you 😄
              </h3>

              <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:space-x-10 px-6 mt-10">
                <div className="flex flex-col items-center justify-center text-center m-4 lg:flex-row lg:space-x-6">
                  {/* Placeholder for location icon */}
                  <span className="contact-border flex h-14 w-14 items-center justify-center text-center">
                    {/* Insert location icon here */}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Location</h3>
                    <p className="text-gray-600 mt-1">Kfar Sava, Israel</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center m-4 lg:flex-row lg:space-x-6">
                  {/* Placeholder for email icon */}
                  <span className="contact-border flex h-14 w-14 items-center justify-center text-center">
                    {/* Insert email icon here */}
                  </span>
                  <div className="contact__info">
                    <h3 className="mb-1 text-lg font-bold">Mail</h3>
                    <a
                      href="mailto:nadavdaniel@hotmail.com"
                      className="text-blue-500"
                    >
                      nadavdaniel@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right spacing div, takes no space on mobile */}
            <div className="hidden md:block md:col-span-1"></div>
          </section>
        </main>

        <RightSidebar className="" />
      </div>
      <Footer />
    </div>
  ); // </RootLayout>
}

export default Home;
