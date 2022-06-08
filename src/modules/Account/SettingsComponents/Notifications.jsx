import { Form } from "react-bootstrap";
import { useState } from "react";

const Notifications = () => {
  const [allowNotifications, setAllowNotifications] = useState(false);

  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-4 text-capitalize">Notifications</h3>
      <div className="bg-secondary p-2 text-white rounded p-3">
        <p className="fw-bold">Nodes</p>
        <small>These options only apply to nodes running software version 2 or higher.</small>
        <div className="d-flex justify-content-between align-items-center border-bottom border-top py-3 mt-1">
          <div className="d-flex align-items-center">
            Receive an email when the number of your nodes online decreases.
          </div>
          <Form>
            <Form.Check
              type="switch"
              className="notifications-switch"
              onChange={() => setAllowNotifications(!allowNotifications)}
              checked={allowNotifications}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
