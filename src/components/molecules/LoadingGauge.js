import { useEffect, useState } from "react";
import Image from "next/image";
import { getImageSrc, customLoader, isExportMode } from "@utils/imageUtils";
import logoImg from "@/../public/img/dev_sparx_logo.png";

function LoadingGauge() {
  const logoImageSrc = getImageSrc(logoImg, "/img/dev_sparx_logo.png");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={logoImageSrc}
          loader={isExportMode ? customLoader : undefined}
          alt="Loading Logo"
          layout="fill"
          objectFit="contain"
          className="animate-bounce"
        />
      </div>
      <p className="text-2xl font-semibold">Loading ...</p>
    </div>
  );
}

export default LoadingGauge;
