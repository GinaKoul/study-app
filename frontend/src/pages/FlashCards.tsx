import React from "react";
import ResponsiveImage from "../components/ResponsiveImage.js";
import flashcardBanner from "../assets/flashcards_banner.png?w=300;600&format=webp;png&as=picture";

const FlashCards: React.FC = () => {
  return (
    <>
      <h1>Welcome to Flashcards</h1>
      <ResponsiveImage
        img={flashcardBanner.img}
        srcSet={flashcardBanner.sources}
        loading="lazy"
        alt="Unit page"
      />
    </>
  );
};

export default FlashCards;
