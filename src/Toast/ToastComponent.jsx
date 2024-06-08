import React, { useState } from "react";
import Toast from "./Toast";
import "./Toast.css";

function ToastComponent() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
      {showToast && <Toast message="This is a toast message!" />}
    </div>
  );
}

export default ToastComponent;
