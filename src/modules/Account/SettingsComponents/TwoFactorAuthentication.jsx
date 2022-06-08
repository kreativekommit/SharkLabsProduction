import { Button } from "react-bootstrap";

const TwoFactorAuthentication = () => {
  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-4 text-capitalize">Two-Factor Authentication</h3>
      <p className="mt-3">
        Take the following steps to enable two-factor authentication and add greater security to your wallet
      </p>
      <div className="steps">
        <div className="step active-step">
          <div className="step-header">
            <span className="step-indecator">1</span>
            <h4 className="step-title">Download Authenticator App</h4>
          </div>
          <div className="step-content">
            <p className="step-description">
              Install an authenticator app on your mobile device. Recommended options:
              <a href="https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en">
                Google Authenticator
              </a>
              , <a href="https://authy.com/download/">Authy</a> ,
              <a href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</a>
            </p>
            <Button variant="primary" className="text-white py-0">
              Continue
            </Button>
          </div>
        </div>
        <div className="step">
          <div className="step-header">
            <span className="step-indecator">2</span>
            <h4 className="step-title">Add wallet to authenticator app</h4>
          </div>
          <div className="step-content"></div>
        </div>
        <div className="step">
          <div className="step-header">
            <span className="step-indecator">3</span>
            <h4 className="step-title">Verify provided code</h4>
          </div>
          <div className="step-content"></div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;
