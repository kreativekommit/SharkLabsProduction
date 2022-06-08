import { Form, Button } from "react-bootstrap";

const DeleteAccount = () => {
  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-4 text-capitalize">Delete Account</h3>
      <p className="mt-5">
        <span className="text-uppercase text-danger">caution:</span> This will permanently delete this account. You will
        no longer be able to access your game progress through this application.
      </p>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I understand and wish to delete my account" />
        </Form.Group>
        <Button variant="danger" className="px-4 mt-2">
          Delete Account
        </Button>
      </Form>
    </div>
  );
};

export default DeleteAccount;
