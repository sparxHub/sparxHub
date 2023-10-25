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
  ContentPanel,
} from "@components/components/molecules/Accordion";

import RootLayout from "./layout";

function Home() {
  const tabContent1 = renderToString(
    <ContentPanel
      title="Software Developer"
      subtitle="TEST"
      contentLinks="https://www.Test.com/"
      list={[
        "Responsible for code Spring MVC & Maven. (Oct 2021 - present)",
        "PartSpring MVC & Maven.",
      ]}
    />
  );

  const tabContent2 = renderToString(
    <ContentPanel
      title="Software Developer"
      subtitle="Test"
      contentLinks="https://www.TEST.com/"
      list={[
        " jashgd asjhgd jhasgd asjdhg asd  asdjhgasjd asdhjgasd (askjhsdf)",
        "Spring MVC & Maven.",
      ]}
    />
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          {/* Hero | Section */}
          <section className="grid grid-cols-12 min-h-screen">
            <div className="col-span-1 border border-red-500"></div>
            <div className="col-span-10 p-4 border border-green-500 flex flex-col items-start justify-center">
              <H3 className={`text-customBlue`}>Hello World! My name is</H3>
              <H1 className="text-customGrey1">Nadav Daniel</H1>
              <H1 className="text-customGrey2">
                I love making new things on the web!
              </H1>
              <Paragraph>text goes here</Paragraph>
              <Paragraph>text goes here</Paragraph>
              <Paragraph>text goes here</Paragraph>
              <Button
                icon="ArrowDownTray"
                variant="outline"
                onClick={() => alert("Button was clicked!")}
              >
                Contact Me
              </Button>
            </div>
            <div className="col-span-1 border border-blue-500"></div>
          </section>

          {/* 01. About  | Section */}
          <section className="grid grid-cols-12">
            <div className="col-span-1 border border-red-500 flex items-center justify-center"></div>
            <div className="col-span-6 border border-green-500 flex flex-col items-start justify-start p-4">
              <SectionTitle number={1} title="About" />

              <Paragraph>
                text goes here
                <a
                  href="https://www.bitmesra.ac.in/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  text goes here
                </a>
                text goes here Engineering (2016-2020) with
                <a
                  href="https://"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  86.3% aggregate
                </a>
                .
              </Paragraph>

              <Paragraph>
                text goes here <span className="font-bold">text goes here</span>{" "}
                text goes here.
              </Paragraph>

              <Paragraph>
                text goes here
                <a
                  href="https://"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  text goes here
                </a>
                text goes here
              </Paragraph>

              <Paragraph>
                text goes here here
                <a
                  href="https://"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  text goes here
                </a>
                , text goes here,
                <a
                  href="https://"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  text goes here
                </a>
                text goes here
                <a
                  href="https://"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  text goes here
                </a>
                text goes here.
              </Paragraph>

              <Paragraph>text goes here</Paragraph>
              <ListGrid
                items={[
                  "Java Enterprise",
                  "Spring MVC & Maven",
                  "Jenkins (CI/CD)",
                  "Spring MVC & Maven",
                  "Spring MVC & Maven",
                  "Spring MVC & Maven",
                  "Spring MVC & Maven",
                  "Spring MVC & Maven",
                ]}
                columns={2}
              />
            </div>
            <div className="col-span-5 border border-blue-500 p-4 flex items-center justify-center">
              {/* Placeholder Image */}
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </div>
          </section>

          {/* 02. ֵExperience  | Section */}
          <section className="grid grid-cols-12">
            <div className="col-span-3 border border-red-500 flex items-center justify-center"></div>
            <div className="col-span-6 border border-green-500 flex flex-col items-start justify-start p-4">
              <SectionTitle number={2} title="Experience" />
              <Accordion
                tabs={[
                  {
                    title: "Pepper",
                    jobTitle: "Freelance Spring MVC & Maven",
                    jobDetails: "July 2021 - Present",
                    content: tabContent1,
                  },
                  {
                    title: "Second",
                    jobTitle: "Freelance",
                    jobDetails: "July 2013 - Present",
                    content: tabContent2,
                  },
                ]}
              />
            </div>
            <div className="col-span-3 border border-blue-500 p-4 flex items-center justify-center"></div>
          </section>
        </main>

        <RightSidebar />
      </div>
      <Footer />
    </div>
  ); // </RootLayout>
}

export default Home;
