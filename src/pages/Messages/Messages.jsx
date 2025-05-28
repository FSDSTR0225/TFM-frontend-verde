import React, { useEffect, useState } from "react";
import {}
import "./Messages.css";

const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3000");
const SENDER_NAME = import.meta.env.VITE_SENDER_NAME || "Anonymous";

export default function Messages() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", {
        text: message,
        sender: SENDER_NAME,
      });
      setMessage("");
    }
  };

  return (
    <div className="Messages">
      <div className="Messages__container">Messages</div>
    </div>
  );
}
