import { Form, FloatingLabel, Button } from "react-bootstrap";

const TransferCode = () => {
  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-5 text-capitalize">Change Your transfer code</h3>
      <Form>
        <FloatingLabel controlId="floatingTextarea2" label="Recovery Pharse" className="mb-4 text-muted">
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
        </FloatingLabel>
        <hr />
        <Form.Group className="mb-3" controlId="transferCode">
          <Form.Control type="text" placeholder="New Transfer Code" className="py-3" />
        </Form.Group>
      </Form>
      <Button variant="primary" className="text-white" disabled>
        Save
      </Button>
    </div>
  );
};

export default TransferCode;
