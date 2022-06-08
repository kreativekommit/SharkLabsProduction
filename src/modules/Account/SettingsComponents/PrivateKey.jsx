import { Button } from "react-bootstrap";

const PrivateKey = () => {
  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-5 text-capitalize">Private Key</h3>
      <h4 className="fw-bold mb-4">Reveal Private Key</h4>
      <p>
        Using this tool, you will be able to download and save your private key which is connected to your Ethereum
        address. BE VERY CAREFUL WITH THIS KEY as it can grant the holder total control over your Ethereum address.
      </p>
      <Button variant="primary" className="text-white">
        Download Private Key
      </Button>
    </div>
  );
};

export default PrivateKey;
