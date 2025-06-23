import React from "react";
import FirstSection from "../../Components/FirstSection/FirstSection";

import backgroundimg from "../../Assets/backgroundimage.webp";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import PackageSection from "../../Components/PackageSection/PackageSection";
import TVPackages from "../../Components/TVPackages/TVPackages";
import SelectPackage from "../../Components/SelectPackage/SelectPackage";

const Tv = () => {
  return (
    <div>
      <Breadcrumb />
      <FirstSection />
      <PackageSection />
      <TVPackages />
      <SelectPackage />
    </div>
  );
};

export default Tv;
