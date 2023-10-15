import React, { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOffline(true);
      
    });

    window.addEventListener("online", () => {
      setOffline(false);
      
    });
  }, []);

  return offline;
};

export default useOnlineStatus;
