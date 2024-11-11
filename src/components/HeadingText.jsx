import React from "react";
import SparklesText from "./ui/SparklesText";
import ExcelLogo from "../assets/ExcelLogo.webp";

const HeadingText = () => {
  return (
    <div className="flex justify-center gap-3 items-center heading-bg">
      <img src={ExcelLogo} alt="Excel Logo" className="excel-logo" />
      <SparklesText
        text="EXCEL PREEVENTS"
        sparklesCount={3}
        className="heading-bold text-3xl lg:text-5xl text-center tracking-wider"
      />
    </div>
  );
};

export default HeadingText;
