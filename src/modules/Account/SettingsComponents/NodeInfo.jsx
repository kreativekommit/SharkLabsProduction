import { Link } from "react-router-dom";

const NodeInfo = () => {
  return (
    <div className="settings-tab mx-3">
      <h3 className="fw-bold mb-4 text-capitalize">node info</h3>
      <div className="bg-secondary p-2 text-white rounded p-3">
        <p>You don't have any Node licenses</p>
        <Link className="text-white px-5 btn btn-primary mt-3" to="/nodes/founders-node/buy">
          Get Node
        </Link>
      </div>
    </div>
  );
};

export default NodeInfo;
