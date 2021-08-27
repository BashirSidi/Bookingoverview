import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../style/Bookingsideheader.css";
import { ImSpoonKnife } from "react-icons/im";
import { BsUpload } from "react-icons/bs";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import useStore from "../state";


const Bookingsideheader = () => {
  const mode = useStore((state) => state.mode);
  const options = ["one", "two", "three"];
  const week = ["mon", "tues", "wed", "thus"];
  const defaultOption = "All Bookings";
  const defaultWeek = "Weekly";

  return (
    <div className="bookingsideheader">
      <div className="header-left">
        <Dropdown
          options={options}
          // onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Search equipments names..."
          />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="spoon-icon">
          <ImSpoonKnife />
        </div>
      </div>
      <div className="header-right">
        <div className="">
          <GiHamburgerMenu />
        </div>
        <div>
          <FaCalendarAlt />
        </div>
        <div>
          <div>View:</div>
          <Dropdown
            options={week}
            // onChange={this. b _onSelect}
            value={defaultWeek}
            placeholder="Select an option"
          />
        </div>
        <div>
          <FiShare2 />
        </div>
        <div>
          <BsUpload />
        </div>
      </div>
    </div>
  );
};

export default Bookingsideheader;
