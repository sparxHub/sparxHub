import Image from "next/image";
import { getImageSrc, customLoader, isExportMode } from "@utils/imageUtils";

function BookGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {items.map((book, index) => {
        const imageSrc = getImageSrc(null, book.image);
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-32 h-48 md:w-40 md:h-60">
              <Image
                src={imageSrc}
                loader={isExportMode ? customLoader : undefined}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h4 className="mt-4 text-center text-lg font-semibold text-primary-900">
              {book.title}
            </h4>
            <p className="text-center text-sm text-gray-600">{book.author}</p>
          </div>
        )
      })}
    </div>
  );
}

export default BookGrid;
