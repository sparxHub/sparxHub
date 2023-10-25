"use client";

import React from "react";
import PropTypes from "prop-types";
import { H2 } from "../atoms";

function SectionTitle({ number, color = "turquoise", title }) {
  return (
    <div className="flex items-center w-full">
      <H2>
        <span className={`text-${color}`}>
          {number.toString().padStart(2, "0")}.
        </span>{" "}
        {title}
      </H2>
      <div className="flex-grow ml-4 border-t border-gray-400" />
    </div>
  );
}

SectionTitle.propTypes = {
  number: PropTypes.number.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
