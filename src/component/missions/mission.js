import React from "react";
import { useSelector } from "react-redux";
import missionData from "./mission-data";
import MissionItem from "./mission-card";
import "./mission-style.scss";

export default function Mission() {
  const missionList = useSelector((state) => state.missionReducer.missions);
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '15%' }}>Mission</th>
          <th>Description</th>
          <th style={{ width: '15%' }}>Status</th>
          <th style={{ width: '15%' }}></th>
        </tr>
      </thead>
      <tbody>
        {
          missionList.map( (item) =>
            <MissionItem 
              key={item.mission_id}
              itemDetail = {item}
            />
          )
        }
      </tbody>
    </table>
  );
}
