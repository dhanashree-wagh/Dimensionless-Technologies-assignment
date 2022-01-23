import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Team Tasks</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://thumbs.dreamstime.com/z/team-management-d-render-close-up-39491133.jpg"
            alt=""
            className="widgetSmImg"
          />
      <div className="widgetSmUser">
            <span className="widgetSmUsername">related Development</span>
            <span className="widgetSmUserTitle">Team Developer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Overview
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://thumbs.dreamstime.com/z/team-management-d-render-close-up-39491133.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">finance</span>
            <span className="widgetSmUserTitle">Team finance Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Overview
          </button>
        </li>
        
        <li className="widgetSmListItem">
          <img
            src="https://thumbs.dreamstime.com/z/team-management-d-render-close-up-39491133.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">security</span>
            <span className="widgetSmUserTitle">Software engineer team</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Overview
          </button>
        </li>
       
      </ul>
    </div>
  );
}
