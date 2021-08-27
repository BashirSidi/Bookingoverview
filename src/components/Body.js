import React from "react";
import Sidebar from "./Sidebar";
import Bookingside from "./Bookingside";
import "../style/Body.css";
import useStore from "../state";

const Body = () => {
  //import { Container } from '@material-ui/core';
  const mode = useStore((state) => state.mode);

  return (
    <div className="body">
      <div className={mode ? "body-left-dark" : "body-left-light"}>
        <Sidebar />
      </div>
      <div className="body-right">
        <Bookingside />
      </div>
    </div>
  );
};

export default Body;
