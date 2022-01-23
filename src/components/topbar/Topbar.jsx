import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, Search} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">D</span>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
            <Search />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" className="topAvatar" />
          </div>
          <div className="topbarIconContainer">
            <p>demo@devis.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}
