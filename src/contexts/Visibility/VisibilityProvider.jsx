import React, { useState } from "react";
import VisibilityContext from "./VisibilityContext";

const VisibilityProvider = ({ children }) => {
  const [isTimeLeftVisible, setisTimeLeftVisible] = useState(true);
  const [isPercentVisible, setisPercentVisible] = useState(true);

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
