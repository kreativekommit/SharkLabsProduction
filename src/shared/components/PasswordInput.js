import { useState } from "react";
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const PasswordInput = ({ placeholder, requirements }) => {
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpace: false,
    hasSymbol: false,
    isLength: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordFilter = (input) => {
    const currentPassword = input.target.value;
    const currentPasswordRrequirements = {
      hasLowerCase: false,
      hasUpperCase: false,
      hasNumber: false,
      hasSpace: false,
      hasSymbol: false,
      isLength: false,
    };

    if (currentPassword !== "") {
      setShowRequirements(true);
    } else {
      setShowRequirements(false);
    }

    if (/[a-z]/.test(currentPassword)) {
      currentPasswordRrequirements.hasLowerCase = true;
    } else {
      currentPasswordRrequirements.hasLowerCase = false;
    }

    if (/[A-Z]/.test(currentPassword)) {
      currentPasswordRrequirements.hasUpperCase = true;
    } else {
      currentPasswordRrequirements.hasUpperCase = false;
    }

    if (/\d/.test(currentPassword)) {
      currentPasswordRrequirements.hasNumber = true;
    } else {
      currentPasswordRrequirements.hasNumber = false;
    }

    if (currentPassword.length >= 8) {
      currentPasswordRrequirements.isLength = true;
    } else {
      currentPasswordRrequirements.isLength = false;
    }

    if (/\s/g.test(currentPassword)) {
      currentPasswordRrequirements.hasSpace = false;
    } else {
      currentPasswordRrequirements.hasSpace = true;
    }

    if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(currentPassword)) {
      currentPasswordRrequirements.hasSymbol = true;
    } else {
      currentPasswordRrequirements.hasSymbol = false;
    }

    setPasswordRequirements(currentPasswordRrequirements);
  };

  return (
    <>
      <InputGroup className="mb-3 flex-row-reverse position-relative">
        <InputGroup.Text
          id="basic-addon1"
          style={{ zIndex: 100, right: "-20px" }}
          className="bg-transparent border-0 position-absolute top-50 translate-middle text-muted fs-4"
          role="button"
          onClick={handleShowPassword}
        >
          {!showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
        </InputGroup.Text>
        <FormControl
          onChange={(e) => handlePasswordFilter(e)}
          onFocus={(e) => setShowRequirements(true)}
          style={{ zIndex: 1 }}
          type={showPassword ? "text" : "password"}
          className="rounded py-3"
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby="change-password"
        />
      </InputGroup>
      {showRequirements && requirements && (
        <div className="mb-3">
          <p>Requirements:</p>
          <Row className="ms-3">
            <Col
              md={4}
              className={`my-1 ${
                passwordRequirements.isLength ? "text-success" : ""
              }`}
            >
              8 characters
            </Col>
            <Col
              md={4}
              className={`my-1 ${
                passwordRequirements.hasUpperCase ? "text-success" : ""
              }`}
            >
              1 uppercase
            </Col>
            <Col
              md={4}
              className={`my-1 ${
                passwordRequirements.hasLowerCase ? "text-success" : ""
              }`}
            >
              1 lowercase
            </Col>
            <Col
              md={4}
              className={`my-1 ${
                passwordRequirements.hasNumber ? "text-success" : ""
              }`}
            >
              1 number
            </Col>
            <Col
              md={4}
              className={`my-1 ${
                passwordRequirements.hasSymbol ? "text-success" : ""
              }`}
            >
              1 symbol
            </Col>
            <Col
              md={4}
              className={`my-1 ${
                passwordRequirements.hasSpace ? "text-success" : ""
              }`}
            >
              No spaces
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default PasswordInput;
