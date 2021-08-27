import React from "react";
import "../style/Bookingside.css";
// import Bookingsideheader from "./Bookingsideheader";
import CalenderComponent from "./CalenderComponent";

const Bookingside = () => {
  return (
    <div className="booking-side">
      <h1>Item Booking</h1>
      {/* <Bookingsideheader /> */}
      <CalenderComponent />
      <div class="btn btn-primary bt">About us</div>
      <div class="btn btn-primary bt">Blogs</div>
      <div class="btn btn-primary bt">Developers</div>
      <div class="btn btn-primary bt">Privacy</div>
    </div>
  );
};

export default Bookingside;
