import { Form, Button } from "react-bootstrap";
import PasswordInput from "../../../shared/components/PasswordInput";

const AccountPassword = () => {
  return (
    <div className="settings-tab">
      <h3 className="fw-bold mb-4">Account Password</h3>
      <p>Fill out the fields below to change your account password.</p>
      <Form>
        <PasswordInput placeholder="New Password" requirements={true} />
        <PasswordInput placeholder="Confirm your new password" requirements={false} />

        <div className="mt-4">
          <Button variant="outline-dark me-2">Cancel</Button>
          <Button variant="primary" className="text-white">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AccountPassword;
