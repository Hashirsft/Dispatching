import React from "react";


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Newsletter = () => {
  const cardStyle = {
    width: '15rem',
    margin: '10px',
    boxShadow: '0 5px 8px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    height: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };


  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <motion.div>
      <div className="container mt-5">
      <h2 className="text-center text-5xl mb-4 font-semibold text-neutralDGrey">Contact us</h2>
      <div style={containerStyle}>
        <div className="card text-center" style={cardStyle}>
          <div className="card-body">
            <p className="mb-2"><strong>Company Information</strong></p>
            <p>Super Stuff Hub LLC</p>
              <p> 5900 Balcones Drive, Suite 100 Austin  TX  78731
            </p>
          </div>
        </div>
        <div className="card text-center" style={cardStyle}>
          <div className="card-body">
            <p className="mb-2"><strong>Contact Number</strong></p>
            <p>--</p>
          </div>
        </div>
        <div className="card text-center" style={cardStyle}>
          <div className="card-body">
            <p className="mb-2"><strong>Email</strong></p>
            <p>superstuffhub@gmail.com</p>
          </div>
        </div>
        <div className="card text-center" style={cardStyle}>
          <div className="card-body">
            <p className="mb-2"><strong>Support</strong></p>
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
