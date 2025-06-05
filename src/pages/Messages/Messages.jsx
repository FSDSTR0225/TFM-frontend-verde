import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Messages.css";
import AuthContext from "../../contexts/AuthContext";
import { HiUsers } from "react-icons/hi";


export default function Messages() {
  const authContext = useContext(AuthContext);

  const [currentUser, setCurrentUser] = useState("");
  const [socket, setSocket] = useState("");
  const [messagesArr, setMessagesArr] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("");

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [serverRoomList, setServerRoomList] = useState("");

  // const [activity, setActivity] = useState("");

  const url = "http://localhost:4000";

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);
    setCurrentUser(authContext.userInfos);

    return () => {
      newSocket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setName(authContext.userInfos.username);
    getRoomsFromServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    console.log("serverRoomList : ", serverRoomList);
  }, [serverRoomList]);

  useEffect(() => {
    if (currentRoom) {
      enterRoom();
    }
    console.log("currentRoom : ", currentRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoom]);

  function getRoomsFromServer() {
    if (currentUser) {
      fetch(`${url}/room/all/${currentUser._id}`).then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => setServerRoomList(data))
            .catch((err) => console.log(err));
        } else {
          setServerRoomList("");
        }
      });
    }
  }

  function sendMessage(e) {
    e.preventDefault();
    if (name && message && currentRoom) {
      socket.emit("message", {
        name: name,
        text: message,
      });
      setMessage("");
      // chatDisplay.scrollTop = chatDisplay.scrollHeight//   need scroll
    }
  }

  function enterRoom() {
    socket.emit("enterRoom", {
      name: name,
      room: currentRoom,
    });
  }

  // Listen for messages
  socket &&
    socket.on("message", (data) => {
      // setActivity("");
      setMessagesArr([...messagesArr, data]);
    });

  return (
    <div className="messages">
      <div className="messages__container">
        <div className="messages__left chat-display">
          {messagesArr.map((msg) => (
            <div
              key={msg._id}
              className={
                msg.name === name ? "post post--left" : "post post--right"
              }
            >
              {msg.name !== "Admin" ? (
                <>
                  <div
                    className={
                      msg.name === name
                        ? "post__header post__header--user"
                        : "post__header post__header--reply"
                    }
                  >
                    <span className="post__header--name">{msg.name}</span>
                    <span className="post__header--time">{msg.time}</span>
                  </div>
                  <div className="post__text">{msg.text}</div>
                </>
              ) : (
                <div className="post__text">{msg.text}</div>
              )}
            </div>
          ))}

          <form
            onSubmit={(e) => sendMessage(e)}
            className="form-message formWrapper"
          >
            <input
              className="formInput"
              type="text"
              placeholder="your message"
              id="message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button className="formBtn" type="submit">
              send
            </button>
          </form>
        </div>

        <div className="messages__middle">
          {serverRoomList &&
            serverRoomList.map((item) => (
              <div
                key={item._id}
                className="roomItem"
                onClick={() => setCurrentRoom(item._id)}
              >
                <div className="roomItem__ownerWrapper">
                  <span className="roomItem__ownerIcon">
                    <HiUsers />
                  </span>
                  <h3 className="roomItem__ownerName">
                    {item.users[1].username}&{item.users[0].username}
                  </h3>
                </div>

                <div className="roomItem__dataWrapper">
                  <div className="roomItem__imgWrapper">
                    <img className="roomItem__img" src={item.property.image} />
                  </div>
                  <div className="roomItem__textWrapper">
                    <div className="roomItem__text"> {item.property.title}</div>
                    <div className="roomItem__text__desc">
                      Price:{item.property.price} / Address:
                      {item.property.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
