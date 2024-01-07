import React, { useState } from "react";
import VisibilityContext from "./VisibilityContext";

const VisibilityProvider = ({ children }) => {
  // use json parse to get boolean value from local storage (you get it in string format)
  const storedTimeVisibility = JSON.parse(
    localStorage.getItem("storedTimeVisibility"),
  );
  const storedPercentVisibility = JSON.parse(
    localStorage.getItem("storedPercentVisibility"),
  );

  // using "nullish coalescing" operator to check if storedTimeVisibility is null
  // and so that "false" boolean value can also be used as a valid value
  const [isTimeLeftVisible, setisTimeLeftVisible] = useState(
    storedTimeVisibility ?? true,
  );
  const [isPercentVisible, setisPercentVisible] = useState(
    storedPercentVisibility ?? true,
  );

  return (
    <VisibilityContext.Provider
      value={{
        isTimeLeftVisible,
        setisTimeLeftVisible,
        isPercentVisible,
        setisPercentVisible,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityProvider;
