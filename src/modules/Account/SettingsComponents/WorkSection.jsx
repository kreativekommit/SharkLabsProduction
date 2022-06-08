import { useState } from "react";
import { Button } from "react-bootstrap";

const WorkSection = () => {
  const [hasDoneWork, setHasDoneWork] = useState(false);
  const [points, setPoints] = useState(0);

  const handleWorkButtonClick = () => {
    setHasDoneWork(true);
    setPoints((points) => points + 1);
  };
  const renderStatus = () => {
    if (hasDoneWork)
      return (
        <div className="d-flex m-auto"> You Have Done The Work For Today</div>
      );
    return (
      <>
        <h4 className="d-flex m-auto ">You haven't Done Your Work For Today</h4>{" "}
        <div className="d-flex justify-content-center">
          <Button
            className="m-auto mt-5"
            variant="outline-primary"
            onClick={handleWorkButtonClick}
          >
            Do Work
          </Button>{" "}
        </div>
      </>
    );
  };
  return (
    <div className=" d-flex flex-column justify-content-center">
      <p className="d-flex m-auto"> Your Total Points is : {points}</p>
      <br />
      {renderStatus()}
    </div>
  );
};

export default WorkSection;
