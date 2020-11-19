import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import db from "../firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("room").onSnapshot((snapshot) => {
      console.log(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar>T</Avatar>
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search or Start new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat addNewChat={true} />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
