// imageUtils.js
export const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";

export const getImageSrc = (image, fallback) => {
  return image?.src || fallback || "/img/default.jpg";
};

export const customLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
