import { Form, Button } from "react-bootstrap";
const DisplayName = () => {
  return (
    <div className="settings-tab">
      <h3 className="fw-bold mb-4">Display Name</h3>
      <p>Your display name will be seen when you play games. Have fun with it</p>
      <Form>
        <Form.Group className="mb-3" controlId="changeUsername">
          <Form.Control type="text" placeholder="Username" className="py-3" />
        </Form.Group>
        <Button variant="primary" className="text-white">
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default DisplayName;
