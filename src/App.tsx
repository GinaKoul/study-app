import { RouterProvider } from "react-router-dom";
import routes from "./router.js";
import "./App.css";
import image from "./assets/flashcards_banner.png?w=300;600&format=webp;png&as=picture";

function App() {
  return (
    <>
      <picture>
        {Object.keys(image.sources).map((key) => (
          <source
            key={image.sources[key]}
            type={"image/" + key}
            srcSet={image.sources[key]}
            sizes="(max-width: 600px) 100vw, 600px"
          />
        ))}
        <img
          src={image.img.src}
          width={image.img.width}
          height={image.img.height}
          alt="Optimized example"
          loading="lazy"
        />
      </picture>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
