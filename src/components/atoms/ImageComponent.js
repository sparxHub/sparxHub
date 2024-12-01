import Image from "next/image";

const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";
console.log("Export Mode:", isExportMode); 

const customLoader = ({ src, width, quality }) => {
  console.debug("Custom Loader Debugging:", { src, width, quality });
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ImageComponent = ({ src, alt, width, height }) => {
  const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";

  // if (isExportMode) {
  //   console.debug("Using plain <img> for export mode:", { src, width, height });
  //   return <img src={src} alt={alt} width={width} height={height} loading="lazy" />;
  // }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loader={customLoader}
      priority
    />
  );
};


export default ImageComponent;
