import React from 'react'
import EnterDetailsForm from '../EnterDetailsForm';
import LoadingSpeedometer from '../LoadingSpeedometer';
import AmazingLoadingComponent from '../loading';
import Header from '../Header';
import { useState } from "react";

function Home() {

  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [msg, setmsg] = useState(
    "You are performing crazy good in LeetCode. Keep grinding! You have good dev skills, just don't stop. Continue to work and you will amaze everyone."
  );

  // Called when form data is received from child
  const settingdata = (val) => {
    setdata(val);
    setloading(false);
    settingmessage(val.rating, val.other);
  };

  // Called when form is submitted
  const formsubmitted = (val) => {
    if (val === 1) {
      setloading(true);
    }
  };

  // Set message based on rating and other
  const settingmessage = (rating, other) => {
    let message = "";
    if (rating > 800) {
      message += "You are performing crazy good in LeetCode. Keep grinding! ";
    } else if (rating > 600) {
      message += "It's not late, just keep grinding. ";
    } else {
      message += "Need to work hard, start grinding LeetCode ASAP (As Soon As Possible). ";
    }
    if (other > 900) {
      message += "You have good dev skills, just don't stop. Continue to work and you will amaze everyone.";
    } else if (other > 700) {
      message += "Keep grinding, continue working on development. Success is not far.";
    } else {
      message += "It's not too late, work on development.";
    }
    setmsg(message);
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap mt-10 justify-evenly items-start gap-8">
        {/* Left: Form */}
        <div className="max-w-md w-full">
        
          <EnterDetailsForm sendingdata={settingdata} submitedform={formsubmitted} />
        </div>
        {/* Middle: Speedometers + Message */}
        {loading === false && data && (
          <div className="flex flex-col items-center space-y-6">
            <div id="loaders" className="flex flex-wrap gap-4 justify-center">
              <LoadingSpeedometer value={Math.round((data.rating / 1500) * 100) || 0} label="LeetCode Performance" />
              <LoadingSpeedometer value={Math.round((data.other / 1500) * 100) || 0} label="Dev Skills" />
              <LoadingSpeedometer value={Math.round(data.elopercntage) || 0} label="Chances of Getting into FAANG" />
            </div>
            <div>
              <h2 className="font-bold text-3xl text-center mb-4">
                The Algorithmic Oracle:
              </h2>
              <p className="text-xl font-medium text-center leading-relaxed max-w-md break-words">
                {msg}
              </p>
            </div>
          </div>
        )}

        {/* Right: Loader (conditionally shown) */}
        {loading && (
          <div className="w-full max-w-md h-[400px] rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow-lg">
            <AmazingLoadingComponent />
          </div>
        )}
      </div>
    </>
  );
}

export default Home