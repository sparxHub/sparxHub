import React from "react";
import { ListGrid } from "@components/components/atoms";

export function Accordion({ tabs }) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="flex border">
      {/* Vertical Tab List */}
      <ul className="flex-none w-48 py-4 border-r">
        {tabs.map((tab, idx) => (
          <li key={idx} className="mb-4">
            <button
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 w-full text-left ${
                activeTab === idx ? "bg-blue-200" : ""
              }`}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Content Panels */}
      <div className="flex-1 p-8">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-300 ${
              activeTab === idx ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <h4 className="mb-4 font-bold">{tab.jobTitle}</h4>
            <h5 className="mb-4 text-gray-500">{tab.jobDetails}</h5>
            <div dangerouslySetInnerHTML={{ __html: tab.content }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContentPanel({ title, subtitle, contentLinks, list }) {
  return (
    <div role="tabpanel" tabIndex="0" className="relative w-full pt-3 pl-8">
      <h4 className="text-lg font-medium">
        <span>{title}</span>
        {subtitle && (
          <span className="text-green-400 ml-2">
            <span>@</span>
            <a href={contentLinks} target="_blank" rel="noopener noreferrer">
              {subtitle}
            </a>
          </span>
        )}
      </h4>

      <h5 className="font-mono text-sm text-gray-400 my-6">{subtitle}</h5>

      <div>
        <ListGrid items={list} columns={1} />
      </div>
    </div>
  );
}
