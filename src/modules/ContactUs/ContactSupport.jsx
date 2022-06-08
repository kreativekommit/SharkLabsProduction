import { Form, Button, Container, Row, Col } from "react-bootstrap";
const ContactSupport = () => {
  return (
    <div className="py-4">
      <div className="px-5 py-2 bg-primary mb-3 d-flex align-items-center" style={{ height: "150px" }}>
        <Container>
          <Row>
            <Col md={10} className="mx-auto">
              <h1 className="my-auto text-white fw-bold">Contact Support</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col md={10} className="mx-auto text-white">
            <Form className="p-5 bg-secondary rounded">
              <Form.Group className="mb-3" controlId="nameField">
                <Form.Label className="d-flex align-items-center">
                  Name<span className="text-danger ms-1 text-center d-block">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="emailField">
                <Form.Label className="d-flex align-items-center">
                  Email<span className="text-danger ms-1 text-center d-block">*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="trackAddressField">
                <Form.Label>TRACK address (if account holder)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="subjectField">
                <Form.Label className="d-flex align-items-center">
                  Subject<span className="text-danger ms-1 text-center d-block">*</span>
                </Form.Label>
                <Form.Control className="bg-opacity-25" type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="d-flex align-items-center">
                  Description<span className="text-danger ms-1 text-center d-block">*</span>
                </Form.Label>
                <Form.Control className="bg-opacity-75" as="textarea" rows={5} />
              </Form.Group>
              <Button variant="primary" className="text-white lg-btn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSupport;
