import React, { useContext } from "react";
import "./Toast.css";

import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaRegWindowClose,
} from "react-icons/fa";
import { ToastContext } from "./context/toastContext";

const Toast = ({ position, autoDeleteInterval }) => {
  const { state, dispatch } = useContext(ToastContext);

  const generateIncon = (type) => {
    switch (type) {
      case "INFO":
        return <FaInfoCircle />;
      case "WARNING":
        return <FaExclamationTriangle />;
      case "DANGER":
        return <FaExclamationCircle />;
      case "SUCCESS":
        return <FaCheck />;
      default:
        return;
    }
  };

  const generateBackgroundColor = (type) => {
    switch (type) {
      case "INFO":
        return "#5bc0de";
      case "WARNING":
        return "#f0ad4e";
      case "DANGER":
        return "#d9534f";
      case "SUCCESS":
        return "#5cb85c";
      default:
        return;
    }
  };

  return (
    <div className={`notification-container ${position}`}>
      {state.map((notification, i) => {
        if (autoDeleteInterval) {
          setInterval(() => {
            dispatch({
              type: "DELETE_NOTIFICATION",
              payload: notification.id,
            });
          }, autoDeleteInterval);
        }
        return (
          <div
            className={`notification toast ${position}`}
            style={{
              backgroundColor: generateBackgroundColor(notification.type),
            }}
            key={notification.id}
          >
            <FaRegWindowClose
              className="close-button"
              onClick={() =>
                dispatch({
                  type: "DELETE_NOTIFICATION",
                  payload: notification.id,
                })
              }
            />
            <div className="notification-image">
              {generateIncon(notification.type)}
            </div>
            <div>
              <p className="notification-title">{notification.title}</p>
              <p className="notification-message">{notification.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
