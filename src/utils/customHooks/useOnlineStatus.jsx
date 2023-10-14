import React from "react";
import { Offline, Online } from "react-detect-offline";

import ONLINE from "../../assets/logo/online.svg";
import OFFLINE from "../../assets/logo/offline.svg";

const useOnlineStatus = () => {
  return (
    <div>
      <Online>
        <img
          src={ONLINE}
          alt="online"
          style={{ width: "50px", marginRight: "4rem" }}
        />
      </Online>
      <Offline>
        <img
          src={OFFLINE}
          alt="offline"
          style={{ width: "50px", marginRight: "4rem" }}
        />
      </Offline>
    </div>
  );
};

export default useOnlineStatus;
