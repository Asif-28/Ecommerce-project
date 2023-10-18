import { MobileCards } from "./MobileCards";
import { useContext, useState, useRef } from "react";
import ProductContext from "../../context/ProductsContext";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Magnify from "./Magnify";

export const ProductPhotos = () => {
  // desktop

  const [currentImageURL, setCurrentImageURL] = useState(
    "/images/product/product_img_08.jpg"
  );
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleImageClick = (imageURL) => {
    setCurrentImageURL(imageURL);
    setIsVideoPlaying(false); // Pause the video
  };

  const handleVideoClick = () => {
    setCurrentImageURL("/videos/product_video_01.mp4");
    setIsVideoPlaying(!isVideoPlaying); // Toggle video play/pause
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const { textHeader } = useContext(ProductContext);
  const { menu } = useContext(ProductContext);

  return (
    <div className="section sm:px-4 sm:py-8 sm:overflow-x-hidden">
      <div>
        <h1 className="pb-4 text-base mt-[1rem] pl-4 sm:pl-10 sm:text-xl font-bold ">
          {textHeader} &gt; {menu}
        </h1>
      </div>

      <div className="flex-col justify-center pl-4 hidden sm:flex">
        <div className="max-w-[450px] p-3 flex justify-center">
          {isVideoPlaying ? (
            <video
              className="object-cover h-full max-h-[510px] max-w-[450px] w-full"
              ref={videoRef}
              src={currentImageURL}
              alt="Product video"
              controls
            />
          ) : (
            <div className="cursor-zoom-in rounded-full">
              <Magnify src={currentImageURL} />
            </div>
          )}
        </div>
        <div className="flex flex-row mt-3 ml-4">
          <img
            className="w-24 h-24 cursor-pointer mr-4 zoom-image"
            src="/images/product/product_img_08.jpg"
            alt="Product image 3"
            onClick={() =>
              handleImageClick("/images/product/product_img_08.jpg")
            }
          />
          <img
            className="w-24 h-24 cursor-pointer mr-4 zoom-image"
            src="/images/product/product_img_08.jpg"
            alt="Product image 3"
            onClick={() =>
              handleImageClick("/images/product/product_img_08.jpg")
            }
          />
          <img
            className="w-24 h-24 cursor-pointer mr-4 zoom-image"
            src="/images/product/product_img_08.jpg"
            alt="Product image 3"
            onClick={() =>
              handleImageClick("/images/product/product_img_08.jpg")
            }
          />
          <div className="w-20 h-20 cursor-pointer" onClick={handleVideoClick}>
            {isVideoPlaying ? (
              <div className="relative">
                <img
                  src="/images/product/product_img_07.jpg"
                  alt="Pause"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <PauseCircleFilledIcon
                  sx={{
                    color: "red",
                    backgroundColor: "white",
                    backgroundClip: "content-box",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                />
              </div>
            ) : (
              <div className="relative">
                <img
                  src="/images/product/product_img_08.jpg"
                  alt="Play"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <PlayCircleFilledIcon
                  sx={{
                    color: "red",
                    backgroundColor: "white",
                    backgroundClip: "content-box",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden pb-3">
        <MobileCards />
      </div>
    </div>
  );
};
