import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToastComponent.css";
import Toast from "./Toast";
import { ToastContext } from "./context/toastContext";

function ToastComponent() {
  const [position, setPosition] = useState("top-left");

  const { dispatch } = useContext(ToastContext);

  const handleButtonSelect = (type) => {
    switch (type) {
      case "SUCCESS":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "success",
            message: "successfully complete",
          },
        });
      case "INFO":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "Info",
            message: "Some Information",
          },
        });
      case "WARNING":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "warning",
            message: "This Warning",
          },
        });
      case "DANGER":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: uuidv4(),
            type,
            title: "Danger",
            message: "you are in danger",
          },
        });
      default:
        return;
    }
  };

  return (
    <div>
      <div className="main-content">
        <h2>Toast Component</h2>
        <div>
          <button
            className="button button--success"
            onClick={() => handleButtonSelect("SUCCESS")}
          >
            {" "}
            SUCCESS
          </button>

          <button
            className="button button--info"
            onClick={() => handleButtonSelect("INFO")}
          >
            {" "}
            INFO
          </button>

          <button
            className="button button--warning"
            onClick={() => handleButtonSelect("WARNING")}
          >
            {" "}
            WARNING
          </button>

          <button
            className="button button--danger"
            onClick={() => handleButtonSelect("DANGER")}
          >
            {" "}
            DANGER
          </button>
        </div>
        <div>
          <select
            className="position-select"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            name=""
            id=""
          >
            <option value="top-left">Top-Left</option>
            <option value="top-right">Top-Right</option>
            <option value="bottom-left">Bottom-Left</option>
            <option value="bottom-right">Bottom-Right</option>
          </select>
        </div>
      </div>
      <Toast position={position} autoDeleteInterval={4000} />
    </div>
  );
}

export default ToastComponent;
