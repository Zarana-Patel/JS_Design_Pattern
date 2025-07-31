import React, { useEffect, useState } from 'react';
import { emitter } from './EventEmitter';

const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showNotification = (todo) => {
      console.log("Notification received:", todo);
    };
    emitter.subscribe("new-todo", showNotification);

    return () => {
    };
  }, []);

  return (
    <div style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
      {message}
    </div>
  );
};

export default Notification;
