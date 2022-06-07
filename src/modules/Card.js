import React from "react";

const Card = ({ cardImage, cardDescription, cardColor }) => {
  return (
    <div
      className="group relative px-7 py-12 rounded-md cursor-pointer transition text-white overflow-hidden min-h-[400px] hover:bg-white"
      style={{ backgroundColor: cardColor }}
    >
      <div className="h-full flex flex-col">
        <div className="grid h-full">
          <p className="col-start-1 row-start-1 text-base transform transition duration-300 opacity-0 sm:text-base lg:min-h-0 md:text-lg group-hover:opacity-100">
            {cardDescription}
          </p>
          <div className="col-start-1 row-start-1 text-center transition transform duration-400 group-hover:translate-y-[600px]">
            <div className="absolute bottom-0 -left-8 -right-8 -mb-14 sm:-left-8 sm:-right-8 top-[-64px]">
              <img src={cardImage} alt="card name" className="w-full object-cover h-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
