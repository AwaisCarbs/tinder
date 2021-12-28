import React from "react";
import "../style/header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import tinder from "../style/image/tinder.svg";
import ForumIcon from "@mui/icons-material/Forum";

function header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={tinder} alt="" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"></ForumIcon>
      </IconButton>
    </div>
  );
}

export default header;
