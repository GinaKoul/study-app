import React from "react";
import ResponsiveImage from "../components/ResponsiveImage.tsx";
import unitBanner from "../assets/unit_banner.png?w=300;600&format=webp;png&as=picture";

const Units: React.FC = () => {
  return (
    <>
      <h1>Welcome to Units</h1>
      <ResponsiveImage
        img={unitBanner.img}
        srcSet={unitBanner.sources}
        loading="lazy"
        alt="Unit page"
      />
    </>
  );
};

export default Units;
