import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const MobileCards = () => {
  const images = [
    { id: 1, image: "/images/product/product_img_05.jpg" },
    { id: 2, image: "/images/product/product_img_05.jpg" },
    { id: 3, image: "/images/product/product_img_05.jpg" },
    { id: 4, image: "/images/product/product_img_05.jpg" },
    { id: 5, image: "/images/product/product_img_05.jpg" },
    { id: 6, image: "/images/product/product_img_05.jpg" },
    { id: 7, image: "/images/product/product_img_05.jpg" },
    { id: 8, video: "/videos/product_video_01.mp4" },
  ];

  const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoomImage = (image) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  const renderMedia = (media) => {
    if (media.image) {
      return (
        <img
          src={media.image}
          alt=""
          onClick={() => handleZoomImage(media.image)}
        />
      );
    } else if (media.video) {
      return (
        <video className="max-h-[335px] w-full" src={media.video} controls />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="section h-[350px] flex overflow-x-scroll">
      <div className=" relative flex flex-row gap-3 overflow-x-scroll overflow-y-clip cont ml-3 pr-3">
        {images.map((i) => (
          <div className="min-w-[260px] max-w-[280px]" key={i.id}>
            {renderMedia(i)}
          </div>
        ))}
      </div>

      {/* Zoomed image */}
      {zoomedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <img src={zoomedImage} alt="" className="max-w-full max-h-full" />
          <button
            className="absolute top-5 right-5 text-white d"
            onClick={() => handleCloseZoom()}
          >
            <CloseIcon sx={{ color: "white", fontSize: "2.5rem" }} />
          </button>
        </div>
      )}
    </div>
  );
};
