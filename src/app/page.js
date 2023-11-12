"use client";

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
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppBar />
      <div className="flex flex-1 justify-center">
        <Sidebar />
        <main className="container  text-gray-600">
          {/* Hero | Section */}
          <section className="grid grid-cols-1 sm:grid-cols-12 min-h-screen">
            <div className="col-span-1 sm:col-span-1 "></div>
            <div className="col-span-1 sm:col-span-10 p-4 sm:p-4 flex flex-col items-start justify-center">
              <H3 className="text-gray-900 mb-0 text-xl sm:text-2xl">
                Shalom! My name is
              </H3>
              <H1 className="text-gray-500 mb-1">Nadav Daniel</H1>
              <H1 className="mb-0">I love making new things on the web!</H1>
              <Paragraph className="max-w-md">
                I&apos;m passionate about crafting exceptional digital
                experiences for SaaS companies. My journey began as a mobile
                developer and entrepreneur, breathing life into multiple mobile
                apps from the ground up. My approach is all about thinking
                outside the box and infusing a creative mindset into every
                project, driven by a relentless passion for innovation.
              </Paragraph>
              <Button
                icon="ArrowDownTray"
                variant="outline"
                onClick={() => alert("Button was clicked!")}
              >
                Contact Me
              </Button>
            </div>
            <div className="col-span-1 sm:col-span-1 "></div>
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
              <Paragraph>
                But my journey is more than just lines of code and software
                development. It&apos;s a life filled with adventure, shared with
                my family. We embarked on an exciting chapter in Hong Kong,
                where we called home from 2010 to 2013. Those years were a
                captivating exploration of the vibrant culture of this bustling
                metropolis. Later, my path led me to Plano, Texas, nestled near
                the lively city of Dallas. From 2015 to 2021, it was a period of
                remarkable growth, both in my professional career and my
                personal life. Today, I&apos;m back in my beautiful homeland,
                Israel, where I find endless inspiration in its breathtaking
                landscapes. Hiking through these awe-inspiring terrains and
                conquering challenging off-road trails with my trusty 4x4 are my
                ways of connecting with the natural beauty that surrounds me.
                The beach, with its infinite horizons, serves as a constant
                muse, igniting my creativity. In my pursuit of balance,
                you&apos;ll often find me at the gym, dedicating four days a
                week to rigorous functional workouts. Life is about crafting not
                only digital marvels but also creating unforgettable moments in
                the great outdoors. Together, let&apos;s embark on this journey
                of creation and exploration! 🚀🌄🏖️💪
              </Paragraph>

              {/* Skills list grid */}
              <ListGrid
                items={[
                  "Java Enterprise",
                  "Spring MVC & Maven",
                  "Jenkins (CI/CD)",
                  // Add more items as needed
                ]}
                columns={2}
              />
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

              <Paragraph>
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
              </Paragraph>
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
