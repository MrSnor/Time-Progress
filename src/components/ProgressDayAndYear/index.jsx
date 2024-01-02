import React from "react";
import ProgressDay from "./ProgressDay";
import ProgressHour from "./ProgressHour";
import ProgressMinute from "./ProgressMinute";
import ProgressYear from "./ProgressYear";

const Index = () => {
  return (
    <>
      <div className="font-SF-Pro-Display grid min-h-screen place-content-center bg-rose-800 text-white">
        <div className="title mb-4 text-center text-3xl">Time progress:</div>
        <div className="container w-[40rem]">
          <ProgressMinute />
          <ProgressHour />
          <ProgressDay />
          <ProgressYear />
        </div>
      </div>
    </>
  );
};

export default Index;
