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
    <div className="section flex overflow-x-scroll">
      <div className="">
        {!zoomedImage ? (
          <div className="relative flex flex-row gap-3 overflow-x-scroll overflow-y-clip cont ml-3 pr-3">
            {images.map((i) => (
              <div className="min-w-[260px] max-w-[280px]" key={i.id}>
                {renderMedia(i)}
              </div>
            ))}
          </div>
        ) : (
          <div className=" w-full  px-4">
            <button
              className="float-right text-white pr-4 mb-2"
              onClick={() => handleCloseZoom()}
            >
              <CloseIcon sx={{ color: "black", fontSize: "2.5rem" }} />
            </button>
            <img src={zoomedImage} alt="" className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};

// {zoomedImage && (

// )}
