import unitBanner from "../assets/flashcards_banner.png?w=300;600&format=webp;png&as=picture";
import ResponsiveImage from "../components/ResponsiveImage.tsx";

const Units = () => {
  return (
    <>
      <h1>Welcome to Units</h1>
      <ResponsiveImage img={unitBanner.img} srcSet={unitBanner.sources} />
    </>
  );
};

export default Units;
