import { Timeline } from "antd";
import React, { useEffect, useState } from "react";
import ApiService from "services/ApiService";

const ActivityLog = (props) => {
  const [activityLogs, setActivityLogs] = useState([]);
  useEffect(()=>{
    switch (props.locationOfView) {
      case "byClient":
        ApiService.GetById("ActivityLog/GetAcitvityLogsByClientId", props.clientId).then((data) => {
          setActivityLogs(data);
        });
        break;
        case "byOffer":
          ApiService.GetById("ActivityLog/GetAcitvityLogsByOfferId", props.offerId).then((data)=> setActivityLogs(data))
          break;
    }
    
  }, [])
  return (
    <Timeline
      style={{
        maxHeight: 300,
        maxWidth: 700,
        overflowY: "scroll",
        padding: 10,
      }}
    >
       {activityLogs.map((item) => (
        <Timeline.Item color={`${item.message.includes("has changed") && "green"}`}>
          {item.message}
        </Timeline.Item>
      ))} 
    </Timeline>
  );
};
export default ActivityLog;
