const ResponsiveImage = (img: object, srcSet: object) => {
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
        width={img.width}
        height={img.height}
        alt="Optimized example"
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;
