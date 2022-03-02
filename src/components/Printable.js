import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./Printable.css";

function Printable({
  title,
  location,
  projectFiles,
  exportFile,
  software,
  printer,
  printStatus,
}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <li className="printable">
        <div className="rollout-banner-header" onClick={handleClick}>
          <FaAngleRight
            className={click ? "right-angle active" : "right-angle"}
          />
          <p>{title}</p>
        </div>
        <ul className={click ? "rollout-banner active" : "rollout-banner"}>
          <li>
            <p>Print Location URL:</p>
            <p>{location}</p>
          </li>
          <li>
            <p>Project File(s):</p>
            <p>{projectFiles}</p>
          </li>
          <li>
            <p>Export File:</p>
            <p>{exportFile}</p>
          </li>
          <li>
            <p>Slicer/Software Used:</p>
            <p>{software}</p>
          </li>
          <li>
            <p>Printer:</p>
            <p>{printer}</p>
          </li>
          <li>
            <p>Print Status:</p>
            <p>{printStatus}</p>
          </li>
        </ul>
      </li>
    </>
  );
}

export default Printable;
