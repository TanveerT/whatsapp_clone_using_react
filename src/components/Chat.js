import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import db from "../firebase";
import "./Chat.css";

const Chat = (props) => {
  const [seed, setSeed] = useState("");
  const [inputvalue, setInputvalue] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("room")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          console.log(snapshot.data().name);
          setRoomName(snapshot.data().name);
        });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInputvalue("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat-headerInfo">
          <h3>{roomName}</h3>
          <p>last seen at..</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message ${false && "chat-recieved"}`}>
          <span className="chat-name">tanveer ahamed</span>
          It works fine i tested.
          <span className="chat-timestamp">4.00pm</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticonIcon />
        <form className="chat-form">
          <input
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
            type="text"
            placeholder="Type a message.."
          />
          <button onClick={sendMessage} type="submit">
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
