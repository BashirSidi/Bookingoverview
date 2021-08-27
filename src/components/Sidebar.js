import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaListAlt, FaCalendarAlt, FaAward } from "react-icons/fa";
import {
  RiFileTextLine,
  RiFeedbackFill,
  RiExchangeFundsLine,
} from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { CgMenuGridR, CgYoutube } from "react-icons/cg";
import { IoAnalyticsOutline } from "react-icons/io5";
import useStore from "../state";
import "../style/Sidebar.css";

const Sidebar = () => {
  const mode = useStore((state) => state.mode);

  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <BiBarChartAlt2 />
            </div>
            <div>Dashboard</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <FaListAlt />
            </div>
            <div>Equipment</div>
          </div>
        </li>
        <li className="sidebar-item active">
          <div className="item">
            <div>
              <RiFileTextLine />
            </div>
            <div>Reports</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <FiUsers />
            </div>
            <div>Users</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <FaCalendarAlt />
            </div>
            <div>Item booking</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <CgMenuGridR />
            </div>
            <div>Tag bazaar</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <CgYoutube />
            </div>
            <div>Tutorials</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <RiFeedbackFill />
            </div>
            <div>Feedback</div>
          </div>
        </li>
        <img
          className="sidebar-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSTrmCxpdZbPNRG0Ru9kPH53XgN5ovTifOg&usqp=CAU"
          alt=""
        />
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <RiExchangeFundsLine />
            </div>
            <div>Exchange</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <FaAward />
            </div>
            <div>Ranking</div>
          </div>
        </li>
        <li className={mode ? "sidebar-item-dark" : "sidebar-item-light"}>
          <div className="item">
            <div>
              <IoAnalyticsOutline />
            </div>
            <div>Ai recommend</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
