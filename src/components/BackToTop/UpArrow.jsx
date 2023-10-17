export const UpArrow = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <button onClick={handleClick}>
        <img
          className="up-arrow w-[70px] rounded-full"
          src="images/homepage/uparrow.png"
          alt=""
        />
      </button>
    </div>
  );
};
