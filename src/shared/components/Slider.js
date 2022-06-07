import { useState, useEffect } from "react";

const Slider = ({ intialStarter, resetPoint, children, slideSpeed, slideType }) => {
  const [count, setCount] = useState(intialStarter);
  useEffect(() => {
    setInterval(() => {
      if (slideType === "top") {
        setCount((prevCount) => prevCount - 0.1);
      } else {
        setCount((prevCount) => prevCount + 0.1);
      }
    }, slideSpeed);
  }, [slideSpeed, slideType]);

  useEffect(() => {
    if (slideType === "top") {
      if (count <= resetPoint) {
        setCount(0);
      }
    } else {
      if (count >= resetPoint) {
        setCount(intialStarter);
      }
    }
  }, [count, intialStarter, resetPoint, slideType]);
  return (
    <>
      <div className="absolute top-0 right-0 w-full h-14 bg-gradient-to-b from-brown-500 to-transparent z-10 lg:from-brown-100"></div>
      <div className="transform ease-linear" style={{ transform: `translateY(${count}px)` }}>
        {children}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-brown-500 to-transparent z-10"></div>
    </>
  );
};

export default Slider;
