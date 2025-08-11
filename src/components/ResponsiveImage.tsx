import React from "react";

export type imgObj = {
  src: string;
  w: number;
  h: number;
};

export type srcSetObj = {
  [key: string]: string;
};

type ResponsiveImageProps = {
  img: imgObj;
  srcSet: srcSetObj;
  loading: "eager" | "lazy" | undefined;
  alt?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  img,
  srcSet,
  loading,
  alt,
}) => {
  return (
    <picture>
      {Object.keys(srcSet).map((key) => (
        <source
          key={srcSet[key]}
          type={"image/" + key}
          srcSet={srcSet[key]}
          sizes="(max-width: 600px) 100vw, 600px"
        />
      ))}
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt ? alt : ""}
        loading={loading}
      />
    </picture>
  );
};

export default ResponsiveImage;
