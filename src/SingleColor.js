import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  // For reference can use either hex or hexColor..
  // const hex = rgbToHex(...rgb);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <button
        className="btn"
        style={{ margin: "auto" }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        copy to clipboard
      </button>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
