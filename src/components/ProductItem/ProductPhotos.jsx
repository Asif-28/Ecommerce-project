import { MobileCards } from "./MobileCards";
import { useContext, useState, useRef, useEffect } from "react";
import ProductContext from "../../context/ProductsContext";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Magnify from "./Magnify";

export const ProductPhotos = () => {
  // desktop
  const imageList = [
    {
      id: 1,
      img: "/images/product/product_img_08.jpg",
    },
    {
      id: 2,
      img: "/images/product/product_img_07.jpg",
    },

    {
      id: 3,
      img: "/images/product/product_img_06.jpg",
    },
    {
      id: 4,
      video: "/videos/product_video_01.mp4",
    },
  ];
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

  const [allowScroll, setAllowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!allowScroll) {
        event.preventDefault();
        if (event.deltaY > 0) {
          // Scrolling down, show the next image or video
          const currentIndex = imageList.findIndex(
            (item) =>
              item.img === currentImageURL || item.video === currentImageURL
          );
          const nextIndex = (currentIndex + 1) % imageList.length;
          if (imageList[nextIndex].img) {
            setCurrentImageURL(imageList[nextIndex].img);
            setIsVideoPlaying(false);
          } else if (imageList[nextIndex].video) {
            setCurrentImageURL(imageList[nextIndex].video);
            setIsVideoPlaying(true);
          }
        } else if (event.deltaY < 0) {
          // Scrolling up, show the previous image or video
          const currentIndex = imageList.findIndex(
            (item) =>
              item.img === currentImageURL || item.video === currentImageURL
          );
          const previousIndex =
            (currentIndex - 1 + imageList.length) % imageList.length;
          if (imageList[previousIndex].img) {
            setCurrentImageURL(imageList[previousIndex].img);
            setIsVideoPlaying(false);
          } else if (imageList[previousIndex].video) {
            setCurrentImageURL(imageList[previousIndex].video);
            setIsVideoPlaying(true);
          }
        }
      }
    };

    const container = document.getElementById("image-container");

    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, [allowScroll, currentImageURL, imageList]);
  return (
    <div className="section sm:px-4 sm:py-8 sm:overflow-x-hidden">
      <div>
        <h1 className="pb-4 mt-[1rem] sm:pl-10 sm:text-xl font-bold hidden sm:block">
          {textHeader} &gt; {menu}
        </h1>
      </div>

      <div
        id="image-container"
        onMouseEnter={() => setAllowScroll(false)}
        onMouseLeave={() => setAllowScroll(true)}
        className="flex-col justify-center pl-4 hidden sm:flex max-w-[500px] min-h-[500px] scroll-smooth"
      >
        <div className="max-w-[500px] min-h-[510px] p-3 flex justify-center">
          {isVideoPlaying ? (
            <video
              className="object-cover max-h-[510px] max-w-[500px] w-full"
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
        <div className="flex justify-center flex-row mt-3 pb-2">
          {imageList
            .filter((listItem) => listItem.img) // Filter to only include items with an 'img' property
            .map((listItem) => (
              <img
                key={listItem.key}
                className="w-24 h-24 cursor-pointer mr-4 zoom-image"
                src={listItem.img}
                alt="image"
                onClick={() => handleImageClick(listItem.img)}
              />
            ))}

          <div
            className=" cursor-pointer overflow-hidden"
            onClick={handleVideoClick}
          >
            {isVideoPlaying ? (
              <div className="relative">
                <img
                  className="w-24 h-24 "
                  src="/images/product/product_img_07.jpg"
                  alt="Pause"
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
                  className="w-24 h-24 "
                  src="/images/product/product_img_08.jpg"
                  alt="Play"
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
