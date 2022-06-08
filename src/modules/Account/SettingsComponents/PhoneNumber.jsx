import { Form, Button, FloatingLabel } from "react-bootstrap";

const PhoneNumber = () => {
  return (
    <div className="settings-tab">
      <h3 className="fw-bold mb-4">Phone Number</h3>
      <p>Your phone number may be used to send payment alerts, ID reminders, and login codes.</p>
      <Form>
        <FloatingLabel controlId="floatingTextarea" label="Enter phone number" className="mb-3 text-muted">
          <Form.Control as="input" type="tel" placeholder="Enter phone number" />
        </FloatingLabel>
        <Button variant="primary" className="text-white">
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default PhoneNumber;
