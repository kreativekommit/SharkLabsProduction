import { useState } from "react";
import { BiUnlink } from "react-icons/bi";
import { Modal, Button } from "react-bootstrap";
import { ConnectDiscord } from "../../../assets/images";

const ConnectDiscordModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className="border-0 d-flex justify-content-center align-items-start px-3"
        closeButton
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="ms-auto text-center fw-bold"
        >
          <p className="mb-0">Connect your</p> Discord Account to Track!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center bg-secondary text-white">
        <img
          src={ConnectDiscord}
          className="d-block mx-auto py-3"
          alt="connect discord"
          style={{ maxWidth: "200px" }}
        />
        <p>
          Connect your Discord account to get access to members-only channels
          and sneak-peeks!
        </p>
      </Modal.Body>
      <Modal.Footer className="border-0 bg-secondary">
        <Button className="w-100 text-white" variant="primary">
          Connect Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Discord = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-4 text-capitalize">Discord</h3>
      <div className="bg-secondary p-2 text-white rounded p-3">
        <p>Status</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BiUnlink className="me-2" size={"1.9rem"} />
            Disconnected
          </div>
          <Button onClick={handleShow} className="text-white px-4">
            Connect
          </Button>
        </div>
      </div>
      <ConnectDiscordModal show={show} onHide={handleClose} animation={false} />
    </div>
  );
};

export default Discord;
