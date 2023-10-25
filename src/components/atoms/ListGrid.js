import React from "react";
import PropTypes from "prop-types";

function ListGrid({
  items,
  columns = 1,
  prefixSymbol = "▹",
  color = "rgb(0,0,218)",
}) {
  let gridClasses = "";

  switch (columns) {
    case 3:
      gridClasses = "grid-cols-3";
      break;
    case 2:
      gridClasses = "grid-cols-2";
      break;
    case 1:
    default:
      gridClasses = "grid-cols-1";
      break;
  }

  return (
    <ul className={`grid ${gridClasses} gap-x-4 gap-y-2 mt-5 list-none pl-5`}>
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`relative mb-2.5 pl-5 text-xs font-mono text-${color}`}
          style={{ lineHeight: "1.5" }}
        >
          <span
            className={`absolute left-0 text-lg leading-5 text-${color}`}
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            {prefixSymbol}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

ListGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  columns: PropTypes.oneOf([1, 2, 3]),
  prefixSymbol: PropTypes.string,
  color: PropTypes.string,
};

export default ListGrid;
