import React from 'react';
import Sidebar from './Sidebar'
import Bookingside from './Bookingside';
import '../style/Body.css'
//import { Container } from '@material-ui/core';

const Body = () => {
  return (
    <div className="body">
      <div className="body-left">
        <Sidebar />
      </div>
      <div className="body-right">
        <Bookingside />
      </div>
    </div >
  )
}

export default Body
