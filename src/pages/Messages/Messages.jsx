import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Messages.css";
import AuthContext from "../../contexts/AuthContext";

// https://socket.io/docs/v4/rooms/

// const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:4000");
// const SENDER_NAME = import.meta.env.VITE_SENDER_NAME || "Anonymous";

export default function Messages() {
  const [currentUser, setCurrentUser] = useState();

  const authContext = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setCurrentUser(authContext.userInfos);
    setMessages(authContext.userMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="messages">
      <div className="messages__container">
        <div className="messages__left">
          {messages &&
            messages.map((item) => (
              <div className="messages__propItem">{item[0]}</div>
            ))}
        </div>
        <div className="messages__right">right part</div>
      </div>
    </div>
  );
}
