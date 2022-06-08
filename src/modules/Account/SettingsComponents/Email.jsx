import { Form, Button } from "react-bootstrap";

const Email = () => {
  return (
    <div className="settings-tab">
      <h3 className="fw-bold mb-4">Email</h3>
      <p>Your verified email address is used to send payment alerts, ID reminders, and login codes.</p>
      <Form>
        <Form.Group className="mb-3" controlId="changeEmail">
          <Form.Control type="email" placeholder="user@tracktoken.games" className="py-3" />
        </Form.Group>
        <Button variant="primary" className="text-white">
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default Email;
