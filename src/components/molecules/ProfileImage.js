import Image from "next/image";
import { getImageSrc, customLoader, isExportMode } from "@utils/imageUtils";
import profileImg from "@/../public/img/Nadav_Photo_For_Site.png";

function ProfileImage() {
  const imageSrc = getImageSrc(profileImg, "/img/Nadav_Photo_For_Site.png");

  return (
    <div className="flex flex-col items-center justify-start lg:items-start h-full">
      <div className="relative group w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-lg shadow-lg overflow-hidden">
        <Image
          src={imageSrc}
          loader={isExportMode ? customLoader : undefined}
          alt="Nadav Daniel"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-yellow-500 opacity-40 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col items-center lg:items-start space-y-2">
        <p className="text-gray-700 font-semibold text-xl">Always Curious</p>
        <p className="text-gray-500 text-sm">Developer</p>
      </div>
    </div>
  );
}

export default ProfileImage;
