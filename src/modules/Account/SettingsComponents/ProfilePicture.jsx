import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const ProfilePicture = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center settings-tab">
      <p className="mb-5">Username</p>
      <Image
        roundedCircle={true}
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        className="settings-userimage mb-4"
      />
      <Button variant="primary" className="text-white md-px-4 py-2" size="lg">
        Change Pic
      </Button>
    </div>
  );
};

export default ProfilePicture;
