// vite-imagetools.d.ts
declare module "*?as=picture" {
  export const sources: {
    srcSet: string;
    type: string;
  }[];

  export const img: {
    src: string;
    width: number;
    height: number;
  };

  const value: {
    sources: typeof sources;
    img: typeof img;
  };

  export default value;
}

declare module "*.{png,jpg,jpeg,gif,svg}" {
  const src: string;
  export default src;
}
