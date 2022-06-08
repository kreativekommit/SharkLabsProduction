import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountPassword from "./SettingsComponents/AccountPassword";
import DisplayName from "./SettingsComponents/DisplayName";
import ProfilePicture from "./SettingsComponents/ProfilePicture";
import Email from "./SettingsComponents/Email";
import PhoneNumber from "./SettingsComponents/PhoneNumber";
import NodeInfo from "./SettingsComponents/NodeInfo";
import Discord from "./SettingsComponents/Discord";
import Notifications from "./SettingsComponents/Notifications";
import DeleteAccount from "./SettingsComponents/DeleteAccount";
import TwoFactorAuthentication from "./SettingsComponents/TwoFactorAuthentication";
import TransferCode from "./SettingsComponents/TransferCode";
import PrivateKey from "./SettingsComponents/PrivateKey";

const Settings = () => {
  return (
    <Container>
      <h3 className="mb-4">Settings</h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="ProfilePicture">
        <Row className="mx-auto">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <h5 className="text-muted px-3 mt-3 text-capitalize pb-2 border-bottom">account</h5>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="ProfilePicture">
                  Profile Picture
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="DisplayName">
                  Display Name
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="AccountPassword">
                  Account Password
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="Email">
                  Email
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="PhoneNumber">
                  Phone Number
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="NodeInfo">
                  Node Info
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="Discord">
                  Discord
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="Notifications">
                  Notifications
                </Nav.Link>
              </Nav.Item>
              <h5 className="text-muted px-3 mt-3 text-capitalize pb-2 border-bottom">security</h5>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="TwoFactor">
                  Two-Factor Authentication
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="TransferCode">
                  Transfer Code
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="PrivateKey">
                  Private Key
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="DeleteAccount">
                  Delete Account
                </Nav.Link>
              </Nav.Item>
              <h5 className="text-muted px-3 mt-3 text-capitalize pb-2 border-bottom">support</h5>
              <Nav.Item>
                <Link to="/contact-support" className="text-capitalize nav-link">
                  Submit a ticket
                </Link>
              </Nav.Item>
              <Nav.Item>
                <a className="text-capitalize nav-link" href="https://support.track.games/" target="_self">
                  Support Center
                </a>
              </Nav.Item>
              <div className="border-bottom pb-2"></div>
              <Nav.Item>
                <Nav.Link className="text-capitalize" role="button" eventKey="logout" disabled>
                  logout
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="ProfilePicture">
                <ProfilePicture />
              </Tab.Pane>
              <Tab.Pane eventKey="DisplayName">
                <DisplayName />
              </Tab.Pane>
              <Tab.Pane eventKey="AccountPassword">
                <AccountPassword />
              </Tab.Pane>
              <Tab.Pane eventKey="Email">
                <Email />
              </Tab.Pane>
              <Tab.Pane eventKey="PhoneNumber">
                <PhoneNumber />
              </Tab.Pane>
              <Tab.Pane eventKey="NodeInfo">
                <NodeInfo />
              </Tab.Pane>
              <Tab.Pane eventKey="Discord">
                <Discord />
              </Tab.Pane>
              <Tab.Pane eventKey="Notifications">
                <Notifications />
              </Tab.Pane>
              <Tab.Pane eventKey="TwoFactor">
                <TwoFactorAuthentication />
              </Tab.Pane>
              <Tab.Pane eventKey="TransferCode">
                <TransferCode />
              </Tab.Pane>
              <Tab.Pane eventKey="PrivateKey">
                <PrivateKey />
              </Tab.Pane>
              <Tab.Pane eventKey="DeleteAccount">
                <DeleteAccount />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Settings;
