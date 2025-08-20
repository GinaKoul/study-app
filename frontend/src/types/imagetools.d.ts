// Match any image import with ?as=picture
declare module "*?as=picture" {
  export const sources: string;

  export const img: {
    src: string;
    w: number;
    h: number;
  };

  const value: {
    sources: typeof sources;
    img: typeof img;
  };

  export default value;
}

// Optional: Add general support for other imagetools queries
declare module "*?*";
